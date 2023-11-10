import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import Menu from "../../components/Menu/Menu";
import { Film } from "../../vite-env";

const FilmDetails = () => {

    const id = useParams();
    const [data, setData] = useState<Film>();

    console.log("data", data)
    
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id.id}?language=fr-FR`, options)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.error(err));
    }, [id])

    return(
        <div className="flex flex-row h-[100vh] w-[100vw]">
            <div className="w-[25vw]">
                <Menu />
            </div>
            <div className="flex flex-col w-[100%] bg-[url('/curtain.png')] p-[2vh]" >
                <div className="flex flex-row h-[60vh] w-[100%]">
                    {data?.poster_path? <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className="h-[56vh]" /> : <></>}
                    <div className="flex flex-col justify-center items-center w-[90%] gap-[2vh]">
                        <h2 className="text-xl font-bold">{data?.title}</h2>
                        <h3 className="text-xl italic">titre original : ({data?.original_title ? data?.original_title : "non communiqué"})</h3>
                        <div className="text-center pb-[5vh] font-bold italic">"{data?.tagline ? data?.tagline : ""}"</div>
                        <div className="flex flex-row items-center gap-[2vh]">Note : {data?.vote_average ? data?.vote_average : "pas de notation"}<Icon icon="iconoir:star-solid" color="#f5f213" /></div>
                        <div>(nombre de votants : {data?.vote_count ? data?.vote_count : "non communiqué"})</div>
                        <div>{}</div>
                    </div>
                </div>
                <div className="border-b-2 border-solid"></div>
                <div className="flex flex-col h-[40vh] w-[100%] justify-center items-center font-bold text-center pl-[2vh] pr-[2vh] overflow-auto">
                    <p>{data?.overview ? data?.overview : <p>Nous n'avons malheuresement pas de résumé à vous proposer pour le moment pour ce film.</p>}</p>
                </div>
            </div>
        </div>
    )
}

export default FilmDetails;