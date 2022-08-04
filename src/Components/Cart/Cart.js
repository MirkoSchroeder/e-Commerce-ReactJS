import React from "react"
import { cartContext } from "../Context/CartContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom"


const Cart = () => {
    const { clearCart, carrito, delProduct, totalCarrito } = useContext(cartContext);
    
    return (
		<>
			{carrito.length > 0 ? (
				<div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
					<div className="flex md:flex-row flex-col justify-end" id="cart">
						<div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
							<p className="text-5xl font-black leading-10 text-gray-800 pt-3 pb-5">Esta es su orden de compra</p>
							{carrito.map((element) => {
								return (
									<div key={element.id} className="md:flex items-center py-8 border-t border-b border-gray-200">
										<div className="h-full w-1/4">
											<img src={element.image} alt={element.title} className="w-full h-full object-center object-cover" />
										</div>
										<div className="md:pl-3 md:w-3/4 w-full">
											<div className="flex items-center justify-between w-full pt-1">
												<p className="text-base font-black leading-none text-gray-800">{element.title}</p>
											</div>
											<p className="text-xs leading-3 text-gray-600 pt-2">Cantidad: {element.cantidad}</p>
											<p className="text-xs leading-3 text-gray-600 py-4 capitalize">Categoria: {element.categoria}</p>
											<p className="w-96 text-xs leading-3 text-gray-600">Precio: ${element.precio}</p>
											<div className="flex items-center justify-between pt-5 pr-6">
												<div className="flex itemms-center">
													<button onClick={() => delProduct(element.id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Quitar</button>
												</div>
												<p className="text-base font-black leading-none text-gray-800">${element.cantidad * element.precio}</p>
											</div>
										</div>
									</div>
								)
							})}
							<button onClick={clearCart} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Vaciar carrito</button>
						</div>
						<div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
							<div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
								<div>
									<div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
										<p className="text-2xl leading-normal text-gray-800">Total</p>
										<p className="text-2xl font-bold leading-normal text-right text-gray-800">${totalCarrito}</p>
									</div>
									<Link to={"/form"}>
										<button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
											Finalizar compra
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center">
					<h1 className="md:text-7xl text-4xl "> Su carrito esta vacio</h1>
					<Link className="underline" to="/">Volver a la pagina principal</Link>
				</div>
			)
			}
		</>
	)
};

export default Cart