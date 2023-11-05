// Instance is a place whare we put base url
import { useEffect, useState } from "react";
import instance from "../axios";

const base_url = 'https://image.tmdb.org/t/p/original/'; 
const Row = ({ title, fetchUrl }) => {
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
    <div>
        <h1>{title}</h1>
        <div className="container mx-auto h-56 flex space-x-1">
           { movies.map((movie) => (
                <img 
                    src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name} 
                    className='w-full  max-h-100  object-contain transition-transform duration-500 transform hover:scale-110'
                />
            ))}
        </div>
    </div>
  )
}

export default Row