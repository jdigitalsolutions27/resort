import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury-resort-demo.vercel.app"),
  title: {
    default: "Azure Cove Resort | Premium Resort Website Demo",
    template: "%s | Azure Cove Resort Demo",
  },
  description:
    "Luxury, mobile-first resort website demo built for high conversion and streamlined booking inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

