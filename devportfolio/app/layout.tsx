import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
// import StarCanvas from "@/components/main/StarBackground";

import dynamic from 'next/dynamic';
const StarCanvas = dynamic(() => import('@/components/main/StarBackground'));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-[#000000] overflow-y-scroll overflow-x-hidden`}>
        {/* // className={`${geistSans.className} overflow-y-scroll overflow-x-hidden`}
        // style={{ background: 'linear-gradient(to bottom,rgb(0, 0, 0),rgba(0, 0, 3, 0.82))' }}>
        // className={`${geistSans.className} bg-gradient-to-b from-[#000000] to-[#1a1a1a] overflow-y-scroll overflow-x-hidden`}> */}
        <StarCanvas/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
