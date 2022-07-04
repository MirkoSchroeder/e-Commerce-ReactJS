import React from 'react'
import Item from '../Item/Item';
import { useEffect, useState } from "react";
import './ItemList.css'
import { SpinnerCircular } from 'spinners-react';



const ItemList = ({ items }) => {
    
     const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    
    return (
        <>
            {
                loading ?
                    <SpinnerCircular />
                    :
                    <div>
                        <h1>PRODUCTOS DE LA TIENDA</h1>
                        <div className="itemsShop">
                        {
                        items.map(item => <Item item={item} key={item.id} />)
                        }
                        </div>
                    </div>
            }
        </>
    )
}

export default ItemList;