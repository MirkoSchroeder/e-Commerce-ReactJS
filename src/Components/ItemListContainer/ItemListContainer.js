import React from 'react'
import { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { promesa } from '../../mocks/fakeApi';

const ItemListContainer = () => {

    const [producto, setProducto] = useState([]);

    
    useEffect(()=>{
        promesa.then((producto) => {
            setProducto(producto);
        })
        .catch (() => {
            console.log ("No cargaron los productos")
        })

    }, []);
    
    function onAdd(cantidad) {
        console.log (`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }

    return (
        <div className="item-list-container">
            <ItemList items={ producto } />
            <ItemCount stock='10' initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer