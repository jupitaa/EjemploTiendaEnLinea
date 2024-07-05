import Hero from "../components/hero/Hero";
import tendencias from "../components/assets/data.js";
import Cards from "../components/cards/Cards.jsx";
import nuevacoleccion from "../components/assets/new_collections.js";

function Tienda() {
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="Tendencias" />
      <Cards data={nuevacoleccion} titulo="Nueva colección" />
    </>
  );
}

export default Tienda;
