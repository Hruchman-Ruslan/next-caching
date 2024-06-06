import type { Metadata } from "next";

import Header from "@/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Caching",
  description: "Learn how Next.js caching works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
