import React from "react"
import "./Cart.css"
import { cartContext } from "../Context/CartContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom"


const Cart = () => {
    const { clearCart, carrito, delProduct, totalCarrito } = useContext(cartContext);
    
    return (
        <>
            {carrito.length > 0 ? (
				<>
                    <h1>Esta es su orden</h1>

                    <div className="divProdSeleccionados">
                        {carrito.map((element) => {
                            return (
                                <div className="divCartProd" key={element.id}>
                                    <img className="imgs" src={element.image} alt="img"></img>
                                    <p>Nombre: {element.title}</p>
                                    <p>Valor: ${element.precio}</p>
                                    <p>Cantidad: {element.cantidad}</p>
                                    <button onClick={() => delProduct(element.id)}>Eliminar Producto</button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="divCarritoFinal">
                        <p>Total a pagar: ${totalCarrito}</p>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                        <button>Terminar compra</button>
                    </div>
				</>

			) : (
				<div>
					<h1> Carrito vacio</h1>
					<Link to="/">Haz click aca para volver a la pagina principal para ver los productos</Link>
				</div>
			)
			}
        </>
    )
}

export default Cart