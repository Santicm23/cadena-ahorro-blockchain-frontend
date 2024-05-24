import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chain Game",
  description: "Web3 chain game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <header className="absolute h-16 top-0 w-screen">
          <div className="flex m-auto w-2/3 h-full text-slate-300 items-center justify-between font-bold">
            <h1 className="text-3xl text-slate-200">Juego de la Cadena</h1>
            <div className="flex items-center space-x-4">
              <Link href={"/"}>Todas las cadenas</Link>
              <Link href={"/mis-cadenas"}>Mis cadenas</Link>
            </div>
          </div>
          <hr className="absolute bottom-0 w-screen border-slate-500" />
        </header>
        {children}
      </body>
    </html>
  );
}
