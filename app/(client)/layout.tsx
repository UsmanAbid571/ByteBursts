import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Bursts",
  description: "Byte Bursts is a blog website where you can explore latest blogs from our professional. We provide information on different topics including programming, technology, problem solving, different resources for websites and much more.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="../favicon.ico" sizes="any" />
        <div className=" top-0 z-[-2] w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Navbar />
          <div className="">
            <div>{children}</div>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
