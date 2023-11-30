import { useState, useEffect } from "react";
// @ts-expect-error-test
const SearchBar = ({ data, setData, page, setPage }) => {

    const [query, setQuery] = useState<string>("");
    const [agreement, setAgreement] = useState<boolean>(true);
    const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

    // const previousAgreement = useRef<boolean>(true);

    // useEffect(() => {
    //     previousAgreement.current = agreement;
    //   }, [agreement]);

    //afin de ne pas trop multiplier les appels API, j'ai fais le choix d'utiliser un handleClick plutôt qu'un useEffect
    //dans mon appel API, trois variables : la recherche entrée, l'accord ou non pour afficher des films adultes et le numéro de page sélectionné (par défaut : 1).
    const handleClick = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: bearerToken,
            }
        };
        setPage(1);
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${agreement}&language=fr-FR&page=${page}`, options)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
        
    }    

    //permet de valider l'input de recherche avec la touche "Entrée" (en plus du onClick)
    const handleKeypress = (e) => {
        if (e.keyCode === 13 || e.which === 13) {
          handleClick(e);
        }
    };

    //ici l'appel API est encadré par un useEffect. Si dans le composant le numéro de page sélectionné change, un nouvel appel API est réalisé et les résultats sont mis à jour
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: bearerToken,
            }
        };
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${agreement}&language=fr-FR&page=${page}`, options)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
    }, [page]);

    return (
        <div className="flex flex-row justify-center pt-3 pb-3 border-b-2 bg-[url('/sieges.png')] gap-[10vw] mobile:flex-col">
            <div className="w-[25vw] flex flex-row justify-between items-center bg-white rounded-[25px] mobile:w-full mobile:justify-center">
                <input 
                    value={query}
                    placeholder="rechercher un film"
                    className="w-[100%] h-full text-center italic bg-white text-[#082f49] rounded-[25px] mobile:w-[90%]"
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
            <div className="flex justify-end w-[15vw] flex flex-row justify-between items-center text-xs text-center italic mobile:w-[90%]">
                <p className="w-[10vw] mobile: w-full">Exclure les films pour adultes de ma recherche : </p>
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
