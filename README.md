# Meld legal and support site

Public privacy policy, Terms of Use, and support information for the Meld
fitness coaching app.

The source is a statically exported Next.js page. GitHub Pages serves the generated `docs/`
directory at `https://jdcr-gh.github.io/meld-privacy/`.

- Privacy Policy: `https://jdcr-gh.github.io/meld-privacy/`
- Terms of Use: `https://jdcr-gh.github.io/meld-privacy/terms/`
- Support: `https://jdcr-gh.github.io/meld-privacy/support/`

## Verify

```bash
npm install
npm run lint
npm run verify:legal
npm run build
```

The public v1 legal manifest records each document identifier, its immutable
GitHub source, and the SHA-256 digest stored by Meld when a user accepts it.
Run `npm run verify:legal -- --remote` to verify both the local Git objects and
the immutable raw GitHub artifacts.
