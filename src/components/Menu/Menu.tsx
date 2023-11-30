import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import FilmRank from "../../components/FilmRank/FilmRank";

//importation des types
import {
    Data
} from "../../vite-env";

const Menu = () => {
// @ts-expect-error-test
    const [rankedFilms, setRankedFilms] = useState<Data>({});
    const filmsTop : Array<object> = rankedFilms.results;
    const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

    //appel API pour, au chargement de la page, récupérer le top des films les mieux classés, et afficher celui-ci dans notre menu
    useEffect(()=> {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: bearerToken,
            }
        };
        
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1', options)
            .then(res => res.json())
            .then(res => setRankedFilms(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="w-[25vw] h-[100vh] flex flex-col bg-sky-950 border-r-2 mobile:border-r-0 mobile:w-full mobile:h-full">
            <div className="flex flex-col w-[100%] pt-[2vh] pb-[2vh] items-center border-b-2 border-solid mobile:h-auto">
                <Link to="/">
                    <img 
                        src={"/logo.png"} 
                        className="w-[10vw] mobile:w-[25vw] mobile:h-auto"
                    />
                </Link>
                <h1 className="flex text-base italic text-center">
                    "<span className="font-bold">Cinéma Studio </span>: ce que le cinéma a de plus beau" 
                </h1>
            </div>
            <div className="flex flex-row items-center justify-center gap-[2vh] h-auto pt-[2vh] pb-[2vh]">
                <Icon icon="iconoir:star-solid" color="#f5f213" />
                <h2 className="flex flex-col items-center justify-center text-center font-bold text-base text-yellow-400">Films les mieux notés</h2>
                <Icon icon="iconoir:star-solid" color="#f5f213" />
            </div>
            <div className="flex flex-col h-full flex-nowrap overflow-auto p-[3vh] gap-[1.5vh]">
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