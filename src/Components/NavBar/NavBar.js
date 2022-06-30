import React from "react";
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


const NavBar = () => {
    return (
        <header className="main-header">
            <div className="areas">
                <div className="area-logo">
                    <img className="main-logo" src={logo} alt="" />
                </div>
                <div className="area-search">
                    <input className="input" type="text" placeholder="Buscar" />
                </div>
                <div>
                    <p className="paragraph-header">Bienvenido/a</p>
                </div>
                <CartWidget onCart={0} />
            </div>

            <nav>
                <ul className="navContainer">
                    <li className="navItem"><a href="/">Notebooks</a></li>
                    <li className="navItem"><a href="/">Monitores</a></li>
                    <li className="navItem"><a href="/">Placas de video</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar