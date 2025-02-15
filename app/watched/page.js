"use client";
import {db} from "../../firebaseConfig";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";

export default function watched() {
    const [movies, setMovies] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const genres = ["Horror", "Comedy", "Thriller", "Action", "Romance", "Mystery", "Animation"];
    useEffect(() => {
        const getMovies = async () => {
          
            const querySnapshot = await getDocs(collection(db, "watched_movies"));
            const movies = querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            
            setMovies(movies);
          
        };
        getMovies();
      }, []);
      
    return(
        <div className="p-5 bg-black">
            {/* <ul>
                {movies.map((movie) => (
                <li key={movie.id} className="flex text-white items-center justify-between p-2 border-b">
                    
                        <span className="text-xl">{movie.movie}</span>
                        <span className="text-xl">{movie.genre}</span>
                        <span className="text-xl">{movie.description}</span>
                </li>
                ))}
            </ul> */}

            {genres.map((genre) => {
                const moviesByGenre = movies.filter(movie => movie.genre === genre);

                return moviesByGenre.length > 0 && (
                    <div key={genre} className="mb-5">
                        <h2 className="text-xl font-bold text-white mb-2">{genre}</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {moviesByGenre.map(movie => (
                                <div key={movie.id} className="p-4 bg-gray-800 text-white rounded">
                                    <h3 className="text-lg font-semibold">{movie.movie}</h3>
                                    <p className={`text-sm ${expanded ? "" : "line-clamp-2 overflow-hidden"}`}>{movie.description}</p>
                                    
                                      {movie.description.length > 100 && (
                                          <button 
                                              className="text-blue-400 text-sm mt-1" 
                                              onClick={() => setExpanded(!expanded)}
                                          >
                                              {expanded ? "See Less" : "See More"}
                                          </button>
                                      )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}