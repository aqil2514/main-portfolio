import type { Metadata } from "next";
import { Inter, Poppins, Young_Serif } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/layout/Navigation";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });
const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--young_serif",
});

const poppins = Poppins(
  {
    weight: ["100", "200", "300", "400", "500"],
    subsets: ["latin"],
    variable: "--poppins"
  }
)

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
    <html lang="id">
      <body className={`${inter.className} ${poppins.variable} ${youngSerif.variable}`}>
        <NavigationBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
