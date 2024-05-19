import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ProfessionalNavBar } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEOTECH",
  description: "CEOTECH landing page template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-800 min-h-screen"}>
        <ProfessionalNavBar />
        {children}
      </body>
    </html>
  );
}
