"use client";


import Link from "next/link";
import UnwatchedMovies from "./components/unwatchedmovies";
export default function Home() {
  return (
    <div className="bg-black font-mono">
      <Link href={"/AddMovie"}>
      <button  className="bg-blue-300 py-3 px-5 m-5 font-bold text-lg font-mono rounded-md">Add new Movie<br/> to Watchlist</button>
      </Link>
      <UnwatchedMovies />
    </div>
    
  );
}
