import React, { useState } from 'react'
import './ItemCount.css'
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
            <div className='itemCount'>
                <h5>RTX 2060ti</h5>
                <div className='itemButtons'>
                    <RemoveIcon fontSize='small' onClick={restarCantidad}></RemoveIcon>
                    <p className='itemsCount'>{contador}</p>
                    <AddIcon fontSize='small' onClick={sumarCantidad}></AddIcon>
                </div>
                <p>Stock : {contadorStock}</p>
                <p>Item Seleccionados: {contador < contadorStock ? contador : contadorStock} </p>
                { contadorStock === 0 ? (
                    <p> NO HAY STOCK</p>
                ) : (
                    <button onClick={agregarCarrito} type="submit"> Agregar al carrito </button>
                )}
            </div>
        </>
    )
}


export default ItemCount