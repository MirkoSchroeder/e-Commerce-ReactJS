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
        fetch("./productos.json")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
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
    

    return (
        <div className="item-list-container">
            <ItemList items={ producto } />
        </div>
    )
}

export default ItemListContainer