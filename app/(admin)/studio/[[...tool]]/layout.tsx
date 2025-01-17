import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminNav from "@/components/adminNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Bursts",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminNav />
        {children}
        </body>
    </html>
  );
}