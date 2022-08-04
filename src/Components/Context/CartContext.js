import { createContext, useState } from "react";
import Swal from 'sweetalert2'
export const cartContext = createContext();


const { Provider } = cartContext;


const CustomProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([]);

    const mostrarAlerta = () => {
        Swal.fire({
        title: 'Estas seguro?',
        text: "Eliminaras todos los productos de tu carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Vaciar carrito'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Carrito vaciado!',
            'Se eliminaron todos los productos del carrito',
            'success'
            )
            setCarrito([]);
            }
        })
        
    }


    const addProduct = (item, cantidad) => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })

        const newProduct = { ...item, cantidad };

        if (isInCart(item.id)) {

        let products = [...carrito];
            const index = carrito.findIndex((element) => element.id === item.id);
            products[index].cantidad = products[index].cantidad + cantidad;
            setCarrito(products);
    } else {
        setCarrito([...carrito, newProduct]);}        
    };

    const delProduct = (id) => {      
        setCarrito(carrito.filter((item) => item.id !== id));    
    };

    const isInCart = (id) => {
        const prodCheck = carrito.find((product) => product.id === id);
        if (prodCheck) {
            return true;
        } else {
            return false;
        }
    };

    const getProductStock = (id) => {
        if (isInCart(id)) {
            const product = carrito.find((element) => element.id === id);
            return product.stock - product.cantidad;
        }
    };

    const getProductQty = carrito.reduce((accumulator, element) => {
        return accumulator + element.cantidad;
    }, 0);

    
    const clearCart = () => {
        mostrarAlerta();
    };

    const totalCarrito = carrito.reduce((acc, element) => {
        return acc + element.cantidad * element.precio;
    }, 0);

    return (
        <Provider value={{ carrito, totalCarrito, addProduct, delProduct, getProductQty, clearCart, getProductStock, mostrarAlerta , setCarrito}} >
            {children}
        </Provider>
    )

}

export default CustomProvider;