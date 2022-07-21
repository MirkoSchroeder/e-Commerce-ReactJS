import React from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [producto, setProducto] = useState([]);
    const {categoryName} = useParams()

    
    useEffect(() => {
        const productosCollec = collection(db, "productos")
        const q = query(
            productosCollec,
            where("categoria", "==", `${categoryName}`)
        );
        getDocs(categoryName ? q : productosCollec)
        .then((result) => {
            const docs = result.docs;
            const prodList = docs.map(produc => {
                const id = produc.id
                const product = { id, ...produc.data()}
                return product
            })
            setProducto(prodList)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [categoryName]);
    

    return (
        <div className="item-list-container">
            <ItemList items={ producto } />
        </div>
    )
}

export default ItemListContainer