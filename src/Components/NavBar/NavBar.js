import React from "react";
import logo from "../../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

import "./NavBar.css"

const Header = () => {
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
                <div class="area-items">
                    <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />
                </div>
            </div>

            <nav>
                <ul class="navContainer">
                    <li class="navItem"><a href="">Notebooks</a></li>
                    <li class="navItem"><a href="">Monitores</a></li>
                    <li class="navItem"><a href="">Placas de video</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header