import { Link } from "react-router-dom";

const FilmRank = ({ film }) => {

    return (
        <Link to={{ pathname: `/details/${film.id}`}} >
            <div className="text-center flex flex-row justify-center items-center rounded-[25px] text-[#ffffff] border-solid border-2 border-sky-500">
                {film.title}
            </div>
        </Link>
    )
}

export default FilmRank;