"use client";

import {db} from "../firebaseConfig";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
export default function Home() {
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState({
  //   movie : "",
  //   genre: "",
  //   description: "",
  // });

  useEffect(() => {
    const getMovies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "not_watched_movies"));
        const movieList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched Movies:", movieList);  // Debugging log
        setMovies(movieList);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, []);
  

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="flex text-black items-center justify-between p-2 border-b">
            
                <span className="text-xl">{movie.movie}</span>
                <span className="text-xl">{movie.genre}</span>
                <span className="text-xl">{movie.description}</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
