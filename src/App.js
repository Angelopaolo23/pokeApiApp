import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Result from "./views/Result";


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/" element={<Pokemones/>} />
        <Route path="/pokemones/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
