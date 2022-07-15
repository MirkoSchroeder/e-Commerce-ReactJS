import { createContext, useState } from "react";
export const cartContext = createContext();
const { Provider } = cartContext;

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addProduct = (item, cantidad) => {

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

    const getProductQty = carrito.reduce((accumulator, element) => {
        return accumulator + element.cantidad;
    }, 0);

    const clearCart = () => {
        setCarrito([]);
    };

    return (
        <Provider value={{ carrito, addProduct, delProduct, getProductQty, clearCart }} >
            {children}
        </Provider>
    )

}

export default CustomProvider;