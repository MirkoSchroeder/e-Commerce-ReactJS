import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const [contadorStock, setContadorStock] = useState(stock)

    const restarCantidad = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const sumarCantidad = () => {
        if (contadorStock > contador) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        if (contadorStock > 0) {
            setContadorStock(contadorStock - contador > 0 ? contadorStock - contador : 0)
        } if (contadorStock >= contador) {
            onAdd(contador)
        } else if (contadorStock <= contador && contador > 0) {
            onAdd(contadorStock)
        }
    }

    return (
        <>
            <div className='bg-neutral-300 w-3/4'>
                <div className='flex justify-center items-center pt-1.5'>
                    <button onClick={restarCantidad}> <RemoveIcon fontSize='small' className="text-gray-900 h-5 w-5 flex-shrink-0" ></RemoveIcon> </button>
                    <p className='font-bold mx-2'>{contador}</p>
                    <button onClick={sumarCantidad}> <AddIcon fontSize='small' className="text-gray-900 h-5 w-5 flex-shrink-0" ></AddIcon> </button>
                    
                </div>
                <p>Stock : {contadorStock}</p>
                <p>Item Seleccionados: {contador < contadorStock ? contador : contadorStock} </p>
                { contadorStock === 0 ? (
                    <p> NO HAY STOCK</p>
                ) : (
                    <button onClick={agregarCarrito} type="submit" className="mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Agregar al carrito </button>
                    )}
            </div>
        </>
    )
}


export default ItemCount