import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Movie Watchlist",
  description: "A simple webapp to add the movies you want to watch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between bg-slate-900 font-mono items-center">
          <header className=" p-4 text-white text-3xl font-bold pl-5">Moviezz</header>
          <Link href = {"/AddMovie"}><button className="bg-blue-300 m-5 px-5 py-3 text-black font-bold rounded-sm">Watched Movies</button></Link>
        </div>
        {children}
      </body>
    </html>
  );
}
