import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarryBackground from "@/components/main/StarryBackground";
// import StarCanvas from "@/components/main/StarBackground";

// import dynamic from 'next/dynamic';
// const StarCanvas = dynamic(() => import('@/components/main/StarBackground'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden`}>
        {/* // className={`${inter.className} overflow-y-scroll overflow-x-hidden`} */}
        {/* // style={{ background: 'linear-gradient(to bottom,rgb(255, 1, 1),rgba(16, 16, 92, 0.82))' }}>  */}
        {/* // className={`${inter.className} bg-gradient-to-b from-[#000000] to-[#1a1a1a] overflow-y-scroll overflow-x-hidden`}>  */}
        
        <StarryBackground />
        <Navbar/>
        
        {children}
      </body>
    </html>
  );
}
