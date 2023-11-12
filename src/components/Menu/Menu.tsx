import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import FilmRank from "../../components/FilmRank/FilmRank";

//importation des types
import {
    Data
} from "../../vite-env";

const Menu = () => {

    const [rankedFilms, setRankedFilms] = useState<Data>({});
    const filmsTop : Array<object> = rankedFilms.results;

    //appel API pour, au chargement de la page, récupérer le top des films les mieux classés, et afficher celui-ci dans notre menu
    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
        };
        
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
            .then(res => res.json())
            .then(res => setRankedFilms(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="w-[25vw] h-[100vh] flex flex-col bg-sky-950 border-r-2">
            <div className="flex flex-col w-[100%] pt-[2vh] pb-[2vh] items-center border-b-2 border-solid">
                <Link to="/">
                    <img 
                        src={"/logo.png"} 
                        className="w-[10vw] h-[10vw] mb-2"
                    />
                </Link>
                <h1 className="flex text-base italic text-center">
                    "<span className="font-bold">Fleet Studio </span>: ce que le cinéma a de plus beau" 
                </h1>
            </div>
            <div className="flex items-center justify-center gap-[2vh] h-[4vh] mt-[2vh] mb-[2vh]">
                <Icon icon="iconoir:star-solid" color="#f5f213" />
                <h2 className="flex flex-col items-center justify-center text-center font-bold text-base text-yellow-400">Films les mieux notés</h2>
                <Icon icon="iconoir:star-solid" color="#f5f213" />
            </div>
            <div className="flex flex-col justify-center flex-nowrap overflow-scroll p-[3vh] gap-[2vh]">
                {
                    filmsTop?.map((film) => (
                        <FilmRank film={film} />
                    ))
                }
            </div>
        </div>
    )
}

export default Menu;