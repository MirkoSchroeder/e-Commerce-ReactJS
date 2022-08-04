import React from "react";
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {

    const links = [
        { name: "Notebooks", route: "notebooks", id: 1 },
        { name: "Monitores", route: "monitores", id: 2 },
        { name: "Placas de Video", route: "placas-de-video", id: 3 },
    ]
    return (
        <header className="bg-[#37373f] w-full">
            <div className="flex items-center justify-around px-0 py-4">
                <div className="area-logo">
                    <Link to="/"><img className="w-48" src={logo} alt="" /></Link>
                </div>

                <div className="area-search">
                    <input className="w-[35.5em] h-[3em] rounded-tl-lg text-[1em] font-light pl-3" type="text" placeholder="Buscar" />
                </div>

                <div>
                    <p className="paragraph-header">Bienvenido/a</p>
                </div>

                <Link to="/cart">
                    <CartWidget onCart={0} />
                </Link>
            </div>

            <nav>
                <ul className="navContainer">
                    {links.map((element) => {
                        return (
                            <li className="navItem" key={element.id}>
                                <NavLink className='colorLinks' to={element.route}>{element.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar