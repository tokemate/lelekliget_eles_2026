import type { Metadata } from "next";
import { Alike, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const alike = Alike({
  variable: "--font-alike",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lélekliget Gyógycentrum | Inárcs & Dabas",
  description:
    "Magánrendelő gyermekgyógyászattal, holisztikus szemlélettel és modern diagnosztikával — Inárcson és Dabasban.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${alike.variable} ${poppins.variable}`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
