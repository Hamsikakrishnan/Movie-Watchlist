import {db} from "../../firebaseConfig";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";

export default function UnwatchedMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "not_watched_movies"));
            const movieList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log("Fetched Movies:", movieList);  
            setMovies(movieList);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        };
        getMovies();
      }, []);
      
    return(
        <div>
            <ul>
                {movies.map((movie) => (
                <li key={movie.id} className="flex text-white items-center justify-between p-2 border-b">
                    
                        <span className="text-xl">{movie.movie}</span>
                        <span className="text-xl">{movie.genre}</span>
                        <span className="text-xl">{movie.description}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}