import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = ({items}) => {
    return (
        <>
            <h1>PRODUCTOS DE LA TIENDA</h1>
            <div className="itemsShop">
                {
                items.map(item => <Item item={item} key={item.id} />)
                }
            </div>
        </>
    )
}

export default ItemList;