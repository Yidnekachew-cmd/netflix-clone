import { useEffect, useState } from "react"
import instance from "../axios"
import requests from "../requests"

const base_url = 'https://image.tmdb.org/t/p/original/'; 
const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect( () => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(
                request?.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }
  return ( 
            <header className=" h-96 object-contain  text-white pb-6" style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "${base_url}${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center'
            }}>
                <div className="container mx-auto text-sm pt-36 h-auto ">
                    <h1 className="text-2xl font-semibold pb-2">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner_buttons">
                        <button className="cursor-pointer outline-none border-none font-semibold rounded px-8 py-1 mr-2 bg-myColor hover:text-[#000] hover:transition-all hover:duration-250 hover:bg-[#e6e6e6]">Play</button>
                        <button className="cursor-pointer outline-none border-none font-semibold rounded px-8 py-1 hover:text-[#000] bg-myColor hover:transition-all hover:duration-250 hover:bg-[#e6e6e6]">My List</button>
                    </div>
                    <h1 className=" w-[50%] pt-3 pb-3 text-xs leading-5">{truncate(movie?.overview, 150)}</h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
  )
}

export default Banner