import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilmCard from "../../components/FilmCard/FilmCard";

const Home = () => {

    interface Data {
        page: number;
        results: Array<object>;
        total_pages: number;
        total_results: number;
    }

    const [data, setData] = useState<Data>({});
    const films : Array<object> = data.results;
    console.log("TEST", films?.length)

    return (
    <div className="flex flex-row">
        <div className="w-[25vw] h-[100vh] flex flex-col bg-sky-950 border-r-2">
            <div className="flex flex-col w-[100%] pt-[2vh] pb-[2vh] items-center">
                <img src={"/logo.png"} className="w-[10vw] h-[10vw] mb-2"/>
                <h1 className="flex text-base italic text-center">
                    "<span className="font-bold">Fleet Studio </span>: ce que le cinéma a de plus beau" 
                </h1>
            </div>
            <div className="border-b-2 border-solid"></div>
        </div>
        <div className="w-[75vw] h-[100vh] flex flex-col">
            <div className="h-[10vh]">
                <SearchBar data={data} setData={setData} />
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
                <div></div>
            }    
        </div>
    </div>
    )
};
  
export default Home;