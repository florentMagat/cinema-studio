import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilmCard from "../../components/FilmCard/FilmCard";
import Menu from "../../components/Menu/Menu";
import {
    Data,
    Playing
} from "../../vite-env";

const Home = () => {

    const [data, setData] = useState<Data>({});
    const [page, setPage] = useState<number>(1);
    const [pages, setPages] = useState<number>(1);
    const [nowPlaying, setNowPlaying] = useState<Playing>({});
      
    const films : Array<object> = data.results;
    const filmsPlaying : Array<object> = nowPlaying.results; 

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
            .then(res => res.json())
            .then(res => setNowPlaying(res))
            .catch(err => console.error(err));
    }, []);

    useEffect (()=>{
        setPages(data?.total_pages)
    }, [data]);

    return (
    <div className="flex flex-row">
        <Menu />
        <div className="w-[75vw] h-[100vh] flex flex-col">
            <div className="h-[10vh]">
                <SearchBar data={data} setData={setData} page={page} />
            </div>
            {films?.length ?
                <div className="flex flex-row justify-center flex-wrap p-[3vh] overflow-auto gap-[2vh]">
                    {
                        films?.map((film) => (
                            <FilmCard film={film} />
                        ))
                    }
                </div>
            :
                <div className="flex flex-row justify-center flex-wrap p-[3vh] overflow-auto gap-[2vh]">
                    {
                        filmsPlaying?.map((film) => (
                            <FilmCard film={film} />
                        ))
                    }
                </div>
            }    
            {pages===1 || pages===undefined ? 
                <></> 
                : 
                <div className="flex flex-row justify-center text-white items-center">
                    {page===1 ? <img src={"/before.png"} className="h-[50%]" onClick={()=>setPage(pages)} />
                        : <img src={"/before.png"} className="h-[50%]" onClick={()=>setPage(page-1)} />}
                    {`page ${page} sur ${pages}`} 
                    {page===pages ? <img src={"/after.png"} className="h-[50%]" onClick={()=>setPage(1)} />
                        : <img src={"/after.png"} className="h-[50%]" onClick={()=>setPage(page+1)} />}
                </div>
            }
        </div>
    </div>
    )
};
  
export default Home;