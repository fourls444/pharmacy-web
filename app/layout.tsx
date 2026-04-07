import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Pharmacy Council of Thailand",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Providers>
          <AppHeader />
          <main className="flex-grow bg-[#f5f5f5]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
