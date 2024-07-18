"use client";

import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <title>Daily UI Challenges from GreatFrontend and Frontend Mentors</title>
      <body>{children}</body>
    </html>
  );
}
