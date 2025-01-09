import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

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
                  <Navbar/>
        {children}
      </body>
    </html>
  );
}
