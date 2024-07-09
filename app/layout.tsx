"use client";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Daily UI Challenges from GreatFrontend and Frontend Mentors</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
