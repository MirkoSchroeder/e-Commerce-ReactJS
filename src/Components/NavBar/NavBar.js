import React from "react";
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
    return (
        <header class="main-header">
            <div class="areas">
                <div class="area-logo">
                    <img class="main-logo" src={logo} alt="" />
                </div>
                <div class="area-search">
                    <input class="input" type="text" placeholder="Buscar" />
                </div>
                <div>
                    <p class="paragraph-header">Bienvenido/a</p>
                </div>
                <CartWidget contador={0} />
            </div>

            <nav>
                <ul class="navContainer">
                    <li class="navItem"><a href="/">Notebooks</a></li>
                    <li class="navItem"><a href="/">Monitores</a></li>
                    <li class="navItem"><a href="/">Placas de video</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar