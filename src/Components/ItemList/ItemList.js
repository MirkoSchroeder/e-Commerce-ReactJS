import React from 'react'
import Item from '../Item/Item';
import { useEffect, useState } from "react";
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom"



const ItemList = ({ items }) => {
    
    const [loading, setLoading] = useState(false)
    
    const { categoryName } = useParams()

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [])
    
    return (
        <div>
            {
                loading ?
                    <SpinnerCircular />
                    :
                    <div>
                        {categoryName === undefined ? (<h1 className='text-5xl font-bold uppercase'>Lista de productos</h1>) : (<h1 className='text-5xl font-bold'>{ categoryName.toUpperCase().replace(/-/g, " ") }</h1>)}
                        <div className="flex flex-wrap justify-around py-5">
                        {
                        items.map(item => <Item item={item} key={item.id} />)
                        }
                        </div>
                    </div>
            }
        </div>
    )
}

export default ItemList;