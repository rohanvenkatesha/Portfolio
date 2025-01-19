import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarryBackground from "@/components/main/StarryBackground";
import ThemeSwitcher from "@/components/main/ThemeSwitcher";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Rohan Venkatesha",
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
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
        // className={'${inter.className}  bg-custom overflow-y-scroll overflow-x-hidden'}
      >
        {/* Video Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/space2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        </div>

        {/* Background Components */}
        <StarryBackground />
        
        {/* Navbar */}
        <Navbar />

        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
