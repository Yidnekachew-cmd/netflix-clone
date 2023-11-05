// Instance is a place whare we put base url
import { useEffect, useState } from "react";
import instance from "../axios";

const base_url = 'https://image.tmdb.org/t/p/original/'; 
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
     }, [ fetchUrl ]);
  return (
    <div className="container mx-auto space-y-2">
        <h1 className="font-bold mt-2 text-white ">{title}</h1>
        <div className="container mx-auto flex space-x-2 overflow-y-hidden overflow-x-scroll p-2 row_posters">
           { movies.map((movie) => (
                <img 
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    className={`w-full h-32 object-contain transition-transform duration-500 transform hover:scale-110  ${isLargeRow && 'h-64'}`} 
                />
            ))}
        </div>
    </div>
  )
}

export default Row