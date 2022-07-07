import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [producto, setProducto] = useState([]);
    const {categoryName} = useParams()

    
    useEffect(() => {
        fetch("../../productos.json")
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (categoryName === undefined) {
                    setProducto([...json]);
                } else {
                    setProducto(
                        json.filter((product) => {
                            return product.categoria === categoryName;
                        })
                    );
                }
            });
    }, [categoryName]);
    
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