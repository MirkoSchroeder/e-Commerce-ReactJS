import React from "react"
import "./Cart.css"
import { cartContext } from "../Context/CartContext.js";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/firebase"


const Cart = () => {
    const { clearCart, carrito, delProduct, totalCarrito } = useContext(cartContext);
    
    const [ ticket, setTicket ] = useState("");
	const comprador = {
		name: "Mirko",
		lastname: "Schroeder",
		mail: "ms@hotmail.com"
	}

	const finalizarCompra = () => {
		const ventaCollec = collection(db, "ventas");
		addDoc(ventaCollec, {
			cliente: comprador,
			items: carrito,
			date: serverTimestamp(),
			total: totalCarrito
		})
		.then((result) => {
			setTicket(result.id);
		})
	}
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
                    <div className="divCarritoFinalCenter">
                        <div className="divCarritoFinal">
                            <p>Total a pagar: ${totalCarrito}</p>
                            <button onClick={clearCart}>Vaciar Carrito</button>
                            <button onClick={finalizarCompra}>Finalizar compra</button>
                            {ticket ?
                                <p>Gracias por su compra, el ID de su compra es {ticket}</p>
                            :
                            <></>}
                        </div>
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