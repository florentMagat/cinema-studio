import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import FilmDetails from "./pages/FilmDetails/FilmDetails";

const App = () => (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:id" element={<FilmDetails film={""} />} />
    <Route path="*" element={<Error />} />
  </Routes>   
</BrowserRouter>  
);

export default App
