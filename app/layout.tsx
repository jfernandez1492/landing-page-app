import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ContactUsDialog } from "@/components/dialog.component";
import { SocialNetwork } from "@/components/social.component";

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
      <body
        className={
          inter.className +
          " bg-slate-800 min-h-screen w-screen flex justify-center"
        }
      >
        <main className="flex h-full flex-col items-center justify-between md:px-16">
          {children}
        </main>
        <SocialNetwork />
        <ContactUsDialog />
      </body>
    </html>
  );
}
