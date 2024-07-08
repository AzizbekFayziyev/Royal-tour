import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoTopBtn from "@/components/GoTopBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Royal Tour",
  description: "Ваши мечты о путешествиях становятся реальностью!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        <GoTopBtn />
      </body>
    </html>
  );
}
