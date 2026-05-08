import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptToDeploy AI",
  description: "One prompt to Canva design, Drive, code & Vercel live site",
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