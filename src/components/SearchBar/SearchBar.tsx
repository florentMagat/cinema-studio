import { useState } from "react";

const SearchBar = ({ data, setData }) => {

    const [query, setQuery] = useState<string>("");

    //afin de ne pas trop multiplier les appels API, j'ai fais le choix d'utiliser un handleClick plutôt que le useEffect ci-dessous
  
    // useEffect(()=> {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //           accept: 'application/json',
    //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
    //         }
    //     };
    //     fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`, options)
    //     .then(response => response.json())
    //     .then(response => setData(response))
    //     .catch(err => console.error(err));
    // },[query]);

    const handleClick = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
        };
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`, options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));
    }

    return (
        <div className="flex flex-row justify-center pt-3 pb-3 border-b-2 bg-[url('/sieges.png')]">
            <div className="w-[25vw] flex flex-row justify-between items-center bg-white rounded-[25px]">
                <input 
                    value={query}
                    placeholder="rechercher un film"
                    className="w-[100%] h-full text-center italic bg-white text-[#082f49] rounded-[25px]"
                    type="search"
                    onChange={(e)=>{
                        e.preventDefault();
                        setQuery(e.target.value);
                    }}    
                />   
                <button onClick={handleClick} className="flex flex-row flex-end ml-[1vw] mr-[0.5vw] h-[80%] items-center rounded-[25px] bg-[#082f49] italic" >
                    search
                </button>
            </div>
        </div>
    )
};
  
export default SearchBar;
