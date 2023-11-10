import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-row justify-center w-[100vw] h-[100vh]">
            <img src={"/404.jpeg"} className="w-[50vw]" />
            <div className="flex flex-col w-[50vw] justify-center items-center text-center text-xl italic">
                <Link to="/">
                    <img src={"/logo.png"} className="h-[15vh] w-[15vh] mb-[5vh]" />
                </Link>
                <p className="mb-[2vh]">Ce n'était pas prévu dans le scénario...</p>
                <p>Merci de cliquer sur le logo pour retourner à l'accueil</p>
                
            </div>
        </div>
    )
};
  
export default Error;