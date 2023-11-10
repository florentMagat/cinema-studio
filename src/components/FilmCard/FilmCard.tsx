const FilmCard = ({ film }) => {

    console.log("FILMCARD", film)
    return (
        <div className="flex flex-col items-center w-[17vw] h-auto border-solid border-2 border-white text-center bg-[#082f49]">
            <div className="w-full h-auto min-h-[10vh] flex items-center justify-center">{film.title}</div>
            <div className="flex flex-row justify-center w-full">
                <div className="w-[100%] overflow-auto">
                    {/* rendu conditionnel de l'image du film si elle existe */}
                    {film.poster_path ? 
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} /> 
                        : <img src={`/logo.png`} className="flex flex-col w-[90%] ml-[5%] mt-[25%]" /> }
                </div>
            </div>
        </div>
    )
} 

export default FilmCard;