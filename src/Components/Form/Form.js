import { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import { cartContext } from "../Context/CartContext.js";
import { Link } from "react-router-dom";

const Form = () => {

    const { carrito, totalCarrito, setCarrito } = useContext(cartContext);

    const [ticket, setTicket] = useState("");
    const [finish, setFinish] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (carrito.length > 0) {
            const comprador = {
                nombre: event.target.name.value,
                direccion: event.target.direccion.value,
                email: event.target.email.value,
                telefono: event.target.telefono.value
            }
            const ventaCollec = collection(db, "ventas");
            addDoc(ventaCollec, {
                cliente: comprador,
                items: carrito,
                date: serverTimestamp(),
                total: totalCarrito
            })
                .then((result) => {
                    setTicket(result.id);
                    setFinish(true)
                    carrito.forEach((elem) => {
                        const updateCollec = doc(db, "productos", elem.id);
                        updateDoc(updateCollec, {
                            stock: elem.stock - elem.cantidad,
                        })
                    })
                    setCarrito([]);
                })

        } else {
            alert("El carrito esta vacio")
        }
    }

    return (
        <>
            {finish === false ? (
                <div className="p-8 flex flex-col">

                    <div className="flex flex-row justify-center items-center">
                        <hr className="border w-full" />
                        <h2 className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">Complete sus datos</h2>
                        <hr className="border w-full" />
                    </div>

                    <form onSubmit={handleSubmit} className="justify-center pt-6">

                        <label className="mt-8 text-base leading-4 text-gray-800" htmlFor="name">Ingrese su nombre</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" id="name" name="name" placeholder="Nombre y Apellido" required />
                            </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800" htmlFor="direccion">Ingrese su direccion</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" id="direccion" name="direccion" placeholder="Direccion" required />
                            </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800" htmlFor="email">Ingrese su email</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" id="email" name="email" placeholder="example@gmail.com" required />
                            </div>
                        </div>

                        <label className="mt-8 text-base leading-4 text-gray-800" htmlFor="telefono">Ingrese su telefono</label>
                        <div className="mt-2 flex-col">
                            <div>
                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="tel" id="telefono" name="telefono" placeholder="XXXX-XXXX" required />
                            </div>
                        </div>

                        <button type="submit" className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white mt-6">COMPRAR</button>
                    </form>
                </div>
            ) :
                (
                    <div className="p-8 flex flex-col justify-center items-center">
                        <h3 className="sm:text-2xl font-medium text-red-500">Gracias por su compra!</h3>
                        <p className="text-sm">Este es su ticket de compra. Guardelo para cualquier reclamo</p>
                        <p className="text-lg font-black">{ticket}</p>
                        <Link className="underline" to="/">Volver a comprar</Link>
                    </div>
                )
            }
        </>

    )

}

export default Form