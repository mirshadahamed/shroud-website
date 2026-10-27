
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shroud — Your Screen. Your Privacy.",
  description:
    "Shroud automatically protects your Mac screen when you look away. On-device face detection, customizable privacy overlays, and effortless protection.",
  applicationName: "Shroud",
  keywords: [
    "Shroud",
    "macOS privacy app",
    "Mac screen privacy",
    "automatic screen protection",
    "on-device face detection",
  ],
  icons: {
    icon: "/shroud-icon.png",
    apple: "/shroud-icon.png",
  },
  openGraph: {
    title: "Shroud — Your Screen. Your Privacy.",
    description:
      "Privacy that moves with you. Automatic screen protection for your Mac.",
    type: "website",
    images: [
      {
        url: "/shroud-icon.png",
        width: 1024,
        height: 1024,
        alt: "Shroud app icon",
      },
    ],
  },
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
