import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import StoreProvider from "@/store/StoreProvider";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahmy Rosyadi | Mitahudev ",
  description: "Backend Developer Portfolio of Fahmy Rosyadi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <StoreProvider>
          {/* Taruh Navbar di sini agar selalu muncul */}
          <Navbar />
          
          {/* Main Content Area */}
          <div className="flex-grow">
            {children}
          </div>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}