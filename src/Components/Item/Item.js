import React from 'react'
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({item}) => {

    return (
        <div className='item-div' id={item.id}>
            <img className='item-imgs' src={item.image} alt=""></img>
            <div>
                <p>{item.title}</p>
                <p>${item.precio}</p>
                <Link to={`/item/${item.id}`}>
                    <button>
                        Ver Informacion
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default Item