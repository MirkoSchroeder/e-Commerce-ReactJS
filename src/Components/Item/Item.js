import React from 'react'
import { Link } from "react-router-dom"

const Item = ({item}) => {

    return (
        <div className='border-solid border border-black' id={item.id}>
            <img className='w-64 h-48' src={item.image} alt=""></img>
            <div>
                <h3 className="mt-4 text-xl text-gray-700">{item.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${item.precio}</p>
                <Link to={`/item/${item.id}`}>
                    <button>
                        <p className='font-semibold'>Ver Informacion</p>
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default Item