import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="item-list-container">
            <ItemCount stock='10' initial={0} />
        </div>
    )
}

export default ItemListContainer