import React from 'react'
import './Item.css'

const Item = ({item}) => {
    console.log (item)

    return (
        <div className='item-div' id={item.id}>
            <img className='item-imgs' src={item.image} alt=""></img>
            <div>
                <p>{item.title}</p>
                <p>${item.precio}</p>
            </div>
        </div>
    )

}

export default Item