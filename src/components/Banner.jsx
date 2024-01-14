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
            <header className="h-full object-contain text-white pt-2 " style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    "${base_url}${movie?.backdrop_path}"
                )`,
                backgroundPosition: 'center center'
            }}>
                <div className="container flex flex-col  md:items-start w-[80%] md:w-[90%] md:justify-end mx-auto text-sm pt-[80%]  h-[74svh] ">
                    <h1 className="text-3xl font-semibold pb-4">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner_buttons text-lg">
                        <button className="cursor-pointer outline-none border-none font-semibold rounded px-8 py-1 mr-2 bg-myColor hover:text-[#000] hover:transition-all hover:duration-250 hover:bg-[#e6e6e6]">Play</button>
                        <button className="cursor-pointer outline-none border-none font-semibold rounded px-8 py-1 hover:text-[#000] bg-myColor hover:transition-all hover:duration-250 hover:bg-[#e6e6e6]">My List</button>
                    </div>
                    <p className=" w-[80%] md:w-[40%] pt-3 pb-3 text-lg leading-8">{truncate(movie?.overview, 150)}</p>
                </div>
                <div className="h-32 rotate-180 bg-gradient-to-t from-transparent via-gradient to-[#111]" />
            </header>
  )
}

export default Banner