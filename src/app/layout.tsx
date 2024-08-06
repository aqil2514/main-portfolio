import type { Metadata } from "next";
import { Inter, Young_Serif } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });
const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--young_serif",
})

export const metadata: Metadata = {
  title: "Muhamad Aqil Maulana",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${youngSerif.className}`}>
        <NavigationBar />
        {children}</body>
    </html>
  );
}
