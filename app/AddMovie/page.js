"use client";
import {db} from "../../firebaseConfig";
import { useRouter } from "next/navigation";
import {addDoc, collection} from "firebase/firestore";
import {useState} from "react";
export default function AddMovie() {
    const router = useRouter();
    const [mov, setMov] = useState({
        movie: "",
        genre: "",
        description: "",
    });
      const addMovie = async (e) => {
        e.preventDefault();
        if (!mov.movie.trim()) return;  

        await addDoc(collection(db, "not_watched_movies"), {
            movie: mov.movie,
            genre: mov.genre,
            description: mov.description
        });

        setMov({ movie: "", genre: "", description: "" });  
        router.push("/");  
    };
    const genres = ["Select the genre", "Horror", "Comedy", "Action", "Thriller", "Romance", "Mystery", "Animation", "Other"];
    return(
        <form onSubmit={addMovie} className="flex flex-col items-center justify-center font-mono bg-black">
            <input type="text" 
                placeholder="Movie Name" 
                onChange={(e) => setMov({...mov, movie: e.target.value})} 
                className="m-2 p-2 rounded-sm" />
            <select 
                value={mov.genre}
                onChange={(e) => setMov({...mov, genre: e.target.value})} 
                className="m-2 p-2 rounded-sm bg-white text-black"
            >
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>{genre}</option>
                ))}
            </select>
            <textarea type="text" 
                placeholder="Description" 
                onChange={(e) => setMov({...mov, description: e.target.value})} 
                className="m-2 p-2 rounded-sm" />
            <button type="submit"className="bg-blue-300 text-black py-3 px-5" >Add the Movie</button>
        </form>
    )
}