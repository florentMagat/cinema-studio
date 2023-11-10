import { useState, useEffect } from "react";

const SearchBar = ({ data, setData, page }) => {

    const [query, setQuery] = useState<string>("");
    const [agreement, setAgreement] = useState<boolean>(true);

    //afin de ne pas trop multiplier les appels API, j'ai fais le choix d'utiliser un handleClick plutôt que le useEffect ci-dessous
    const handleClick = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
        };
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${agreement}&language=fr-FR&page=${page}`, options)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
    }    

    const handleKeypress = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
          handleClick(e);
        }
    };

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmExMTgzM2M4ZDdiYWZkZDdmMjRkZjA3NTJjZGY0NyIsInN1YiI6IjY1NGQ1YzRjMWFjMjkyN2IyZjI4NGZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJSMAOHC-kegTk863e-RjnZH8_QTd89ykK_-MU7MVBE'
            }
        };
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${agreement}&language=fr-FR&page=${page}`, options)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
    }, [page]);

    console.log(agreement)

    return (
        <div className="flex flex-row justify-center pt-3 pb-3 border-b-2 bg-[url('/sieges.png')] gap-[10vw]">
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
                    onKeyPress={handleKeypress}
                />   
                <button 
                    onClick={handleClick} 
                    className="flex flex-row flex-end ml-[1vw] mr-[0.5vw] h-[80%] items-center rounded-[25px] bg-[#082f49] italic" >
                    search
                </button>
            </div>
            <div className="flex justify-end w-[15vw] flex flex-row justify-between items-center text-xs text-center italic">
                <p className="w-[10vw]">Exclure les films pour adultes de ma recherche : </p>
                <button 
                    onClick={()=>setAgreement(!agreement)} 
                    className={agreement ? "flex flex-row flex-end ml-[1vw] mr-[0.5vw] h-[80%] w-[3vw] justify-center items-center rounded-[25px] bg-[#C80F0F] italic border-2 border-white"  
                    : "flex flex-row flex-end ml-[1vw] mr-[0.5vw] h-[80%] w-[3vw] justify-center items-center rounded-[25px] bg-[#1E8449] italic border-2 border-white"}     
                >
                    {agreement ? "Non" : "Oui" }
                </button>
            </div>
        </div>
    )
};
  
export default SearchBar;
