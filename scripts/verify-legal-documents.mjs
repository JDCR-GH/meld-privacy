import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const sourceManifestPath = path.join(
  repositoryRoot,
  "legal/document-manifest-v1.json",
);
const publicManifestPath = path.join(
  repositoryRoot,
  "public/legal/document-manifest-v1.json",
);
const deployedManifestPath = path.join(
  repositoryRoot,
  "docs/legal/document-manifest-v1.json",
);
const sourceManifestBytes = readFileSync(sourceManifestPath);
const publicManifestBytes = readFileSync(publicManifestPath);
const deployedManifestBytes = readFileSync(deployedManifestPath);

if (!sourceManifestBytes.equals(publicManifestBytes)) {
  throw new Error("The source and public legal manifests must be identical.");
}

if (!sourceManifestBytes.equals(deployedManifestBytes)) {
  throw new Error("The source and deployed legal manifests must be identical.");
}

const manifest = JSON.parse(sourceManifestBytes.toString("utf8"));
const commit = manifest.canonicalCommit;
const expectedRepository = "https://github.com/JDCR-GH/meld-privacy";

if (!/^[0-9a-f]{40}$/.test(commit)) {
  throw new Error("canonicalCommit must be a full 40-character Git commit SHA.");
}

if (manifest.canonicalRepository !== expectedRepository) {
  throw new Error(`Unexpected canonicalRepository: ${manifest.canonicalRepository}`);
}

if (manifest.hashAlgorithm !== "SHA-256") {
  throw new Error(`Unsupported hash algorithm: ${manifest.hashAlgorithm}`);
}

const resolvedCommit = execFileSync(
  "git",
  ["rev-parse", `${commit}^{commit}`],
  { cwd: repositoryRoot, encoding: "utf8" },
).trim();

if (resolvedCommit !== commit) {
  throw new Error(`canonicalCommit resolves to ${resolvedCommit}, expected ${commit}.`);
}

const shouldVerifyRemote = process.argv.includes("--remote");

for (const document of manifest.documents) {
  const expectedBlobUrl = `${expectedRepository}/blob/${commit}/${document.sourcePath}`;
  const expectedRawUrl = `https://raw.githubusercontent.com/JDCR-GH/meld-privacy/${commit}/${document.sourcePath}`;

  if (document.canonicalBlobUrl !== expectedBlobUrl) {
    throw new Error(`Unexpected canonicalBlobUrl for ${document.id}.`);
  }

  if (document.canonicalRawUrl !== expectedRawUrl) {
    throw new Error(`Unexpected canonicalRawUrl for ${document.id}.`);
  }

  const canonicalBytes = execFileSync(
    "git",
    ["show", `${commit}:${document.sourcePath}`],
    { cwd: repositoryRoot, encoding: "buffer", maxBuffer: 10 * 1024 * 1024 },
  );
  const localHash = sha256(canonicalBytes);

  if (localHash !== document.sourceSha256) {
    throw new Error(
      `${document.id} local hash ${localHash} does not match ${document.sourceSha256}.`,
    );
  }

  if (shouldVerifyRemote) {
    const response = await fetch(document.canonicalRawUrl, {
      headers: { "user-agent": "meld-legal-verifier/1" },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(
        `${document.id} remote artifact returned HTTP ${response.status}.`,
      );
    }

    const remoteHash = sha256(Buffer.from(await response.arrayBuffer()));
    if (remoteHash !== document.sourceSha256) {
      throw new Error(
        `${document.id} remote hash ${remoteHash} does not match ${document.sourceSha256}.`,
      );
    }
  }

  console.log(
    `Verified ${document.id} at ${commit}:${document.sourcePath} (${localHash}).`,
  );
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}
