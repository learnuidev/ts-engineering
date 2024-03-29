import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/font-awesome/font-awesome.config";
import { Navbar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tse",
  description: "pro social media from the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
