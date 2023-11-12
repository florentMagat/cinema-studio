import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import Menu from "../../components/Menu/Menu";
import { Film } from "../../vite-env";
import ReactCountryFlag from "react-country-flag";

const FilmDetails = () => {

    //récupération de l'id du film sélectionné grâce à useParams
    const id = useParams();
    const [data, setData] = useState<Film>();
    const [load, setLoad] = useState<boolean>(true);

    //appel API afin de récupérer un maximum de détails sur le film sélectionné
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
            setLoad(false);
    }, [id])

    console.log("DATA", data)

    //MISE EN FORME DES DONNEES DE DATA
    //le format de realease_date n'est pas optimal, je conserve seulement l'année
    const date = data?.release_date.toString().slice(0,4);
    const budget = (data?.budget)?.toLocaleString("us-US");
    const country = data?.production_countries[0].iso_3166_1;
  
    return(
        load ?
            <div className="flex flex-row h-[100vh] w-[100vw]">
                <div className="w-[25vw]">
                    <Menu />
                </div>
                <div className="flex flex-col w-[100%] bg-[url('/curtain.png')] p-[2vh]" >
                </div>
            </div>
            :
            <div className="flex flex-row h-[100vh] w-[100vw]">
                <div className="w-[25vw]">
                    <Menu />
                </div>
                <div className="flex flex-col w-[100%]" >
                    <div className="flex flex-row h-[60vh] w-[100%] bg-[url('/curtain.png')] p-[2vh]">
                        {data?.poster_path? <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} className="h-[56vh]" /> : <></>}
                        <div className="flex flex-col w-full">
                            <div className="flex flex-row w-full h-[45%]">
                                <div className="flex flex-col justify-center items-center w-full gap-[2vh]">
                                    <h2 className="text-xl font-bold">{data?.title}</h2>
                                    <h3 className="text-xl italic">titre original : ({data?.original_title ? data?.original_title : "non communiqué"})</h3>
                                    <div className="text-center pb-[5vh] font-bold italic">"{data?.tagline ? data?.tagline : <></>}"</div>
                                </div>
                            </div>
                            <div className="flex flex-row w-full h-[45%] justify-around">
                                <div className="flex flex-col items-center justify-baseline">
                                    <div className="flex flex-row items-center gap-[1vh]">Note : {data?.vote_average ? data?.vote_average : "pas de notation"}<Icon icon="iconoir:star-solid" color="#f5f213" /></div>
                                    <div className="mb-[5vh]">(nombre de votants : {data?.vote_count ? data?.vote_count : "non communiqué"})</div>
                                    <div>date de sortie du film : {date ? date : ""}</div>
                                    <div>budget : {budget ? budget : "inconnu"} $</div>
                                    <div>
                                        {country ?
                                        <div className="flex flex-row mt-[1vh] gap-[1vh] items-center">
                                            <p>pays de production principal : </p>
                                                <ReactCountryFlag
                                                    countryCode={country}
                                                    svg
                                                    style={{
                                                        width: '1.5vw',
                                                        height: "auto",
                                                    }}
                                                    title="US"
                                                />
                                        </div>
                                        : <></>}
                                    </div>
                                </div>
                            {data?.backdrop_path? <img src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} className="w-auto h-[20vh]" /> : <></>}
                            </div>
                        </div>              
                    </div>
                    <div className="border-b-2 border-solid"></div>
                    <div className="flex flex-col h-[40vh] w-[100%] justify-center items-center text-center overflow-auto p-[4vh]">
                        <div className="italic">{data?.overview ? data?.overview : <p>Nous n'avons malheuresement pas de résumé à vous proposer pour le moment pour ce film.</p>}</div>
                        <div className="flex flex-row mt-[5vh] items-center">
                            <p className="pr-[3vh]">genre(s) du film : </p>
                            {data?.genres.map((genre)=>(
                                <div className="mr-[2vh] bg-[#082f49] text-[#facc30] p-2 rounded-xl">{genre.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FilmDetails;
