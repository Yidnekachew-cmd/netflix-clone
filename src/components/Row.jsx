// Instance is a place whare we put base url
import { useEffect, useState } from "react";
import instance from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = 'https://image.tmdb.org/t/p/original/'; 
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
     }, [ fetchUrl ]);

     const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error))
        }
     }
  return (
    <div className="container mx-auto space-y-2 ">
        <h1 className="font-bold mt-2 text-white z-50">{title}</h1>
        <div className="container mx-auto flex space-x-2 overflow-y-hidden overflow-x-scroll p-2 row_posters">
           { movies.map((movie) => (
                <img 
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    className={` cursor-pointer w-full h-32 object-contain transition-transform duration-500 transform hover:scale-110  ${isLargeRow && 'h-64'}`} 
                />
            ))}
        </div>
        <div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={{
                height: '390',
                width: '100%',
                playerVars: {
                    autoplay: 1,
                }
            }} />}
        </div>
    </div>
  )
}

export default Row