import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jdcr-gh.github.io/meld-privacy/"),
  title: "Privacy Policy | Meld",
  description: "How Meld collects, uses, protects, and deletes your information.",
  openGraph: {
    title: "Privacy Policy | Meld",
    description: "Clear information about how Meld handles your training and health data.",
    type: "website",
    images: ["https://jdcr-gh.github.io/meld-privacy/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Meld",
    description: "Clear information about how Meld handles your training and health data.",
    images: ["https://jdcr-gh.github.io/meld-privacy/og.png"],
  },
  icons: { icon: "/meld-privacy/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
