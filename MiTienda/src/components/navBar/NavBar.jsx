import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import {Link}  from "react-router-dom";

function NavBar() {
  /* const [nombreDeVariable, function modificadorDeVariable] = useState(valorInicialdelaVariable) String 
    La convención es que la función modificadora de variable se le anteponga un set más el nombre de variable, todo junto en camelCase */
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>mi tienda en línea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda
            {/* sintaxis de operador ternario: evaluador ? siCumpleLaCondición : siNoLaCumple */}
            {/* sintaxis de operador AND: evaluador && siCumpleLaCondición */}
            {menu === "tienda" ? <hr /> : <></>}
          </Link>
        </li>

        <li onClick={() => setMenu("hombre")}>
          <Link to="/Hombre" style={{ textDecoration: "none" }}>
            Hombre
            {menu === "hombre" && <hr />}{" "}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/Mujer" style={{ textDecoration: "none" }}>
            Mujer
            {menu === "mujer" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("niño")}>
          <Link to="/Nino" style={{ textDecoration: "none" }}>
            Niño
            {menu === "niño" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon" />
      </div>
    </div>
  );
}

export default NavBar;
