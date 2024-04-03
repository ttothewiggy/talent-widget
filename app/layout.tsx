import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Widget App",
  description: "Widget App for Talent Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
