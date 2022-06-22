import React from 'react'

import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div class="item-list-container">
            {greeting}
        </div>
    )
}

export default ItemListContainer