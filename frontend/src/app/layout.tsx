"use client";

import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header_Main";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "ReVOLT",
  description: "The ReVOLT Website/Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <Header/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
