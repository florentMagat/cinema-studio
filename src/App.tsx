import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

const App = () => (
 <BrowserRouter>
  <Routes>
    <Route path="home" element={<Home />} />
    <Route path="*" element={<Error />} />
  </Routes>   
</BrowserRouter>  
);

export default App
