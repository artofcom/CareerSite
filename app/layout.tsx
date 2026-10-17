import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyungtae Park — Senior Software Engineer",
  description:
    "Portfolio of Hyungtae Park, a senior software engineer building games, healthcare applications, and immersive real-time experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
