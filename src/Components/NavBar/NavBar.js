import React from "react";
import logo from "../../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

import "./NavBar.css"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />

            <nav class="nav">
                <ul>
                    <li class="navItem"><a href="#">Notebooks</a></li>
                    <li class="navItem"><a href="">Monitores</a></li>
                    <li class="navItem"><a href="">Placas de video</a></li>
                </ul>
            </nav>

            <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />

        </header>
    )
}

export default Header