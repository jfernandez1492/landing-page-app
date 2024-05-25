import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactUsDialog } from "@/components/contact-us.component";
import { SocialNetwork } from "@/components/socials.component";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={
          inter.className +
          "min-h-screen w-screen flex justify-center bg-slate-800"
        }
      >
        <main className="w-full">{children}</main>
        <SocialNetwork />
        <ContactUsDialog />
        <div className="fixed bottom-4 left-4 hidden md:block">
          <p className="text-white text-xs">
            @{new Date().getFullYear()} CEOTECH. Todos los derechos reservados.
          </p>
        </div>
      </body>
    </html>
  );
}
