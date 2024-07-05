import NavBar from "./components/navBar/NavBar";
import "./index.css";
import Tienda from "./pages/Tienda";
import Mujer from "./pages/Mujer";
import Hombre from "./pages/Hombre";
import Nino from "./pages/Nino";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/nino" element={<Nino />}></Route>
      </Routes>
    </>
  );
}

export default App;
