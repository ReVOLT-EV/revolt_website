import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header_Main";
import Footer from "@/components/Footer";

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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
