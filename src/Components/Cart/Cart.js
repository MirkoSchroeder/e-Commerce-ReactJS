import React from "react"
import { cartContext } from "../Context/CartContext.js";
import { useContext } from "react";

const Cart = () => {
    const { clearCart } = useContext(cartContext);
	const { carrito } = useContext(cartContext);
    const { delProduct } = useContext(cartContext)
    
    return (
        <>
            <div>Cart</div>
            {carrito.map ((element) => {
                    return (
                        <div key={element.id}>
                            <img src={element.image} alt="HOLA!"></img>
                            <p>Nombre: {element.title}</p>
                            <p>Valor: ${element.precio}</p>
                            <p>Cantidad: {element.cantidad}</p>						
                            <button onClick={() => delProduct(element.id)}>Eliminar Producto</button>
                        </div>
                    )
                })}
                <div>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
        </>
    )
}

export default Cart