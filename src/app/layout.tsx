import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextUI Themes - Theme Generator for Your Next Project",
  description: "Explore and create NextUI themes with our theme generator. Find the perfect theme for your next project and customize it to suit your needs.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={`overflow-auto ${inter.className}`}
      >
        <Providers>
          <Navbar />
          <main
          className="p-6 max-w-screen-lg mx-auto"
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
