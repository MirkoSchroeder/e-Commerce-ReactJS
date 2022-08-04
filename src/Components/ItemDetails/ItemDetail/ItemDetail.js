import ItemCount from "../../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import { cartContext } from "../../Context/CartContext.js";
import { useContext } from "react";

const ItemDetail = ({ item }) => {
    const { addProduct } = useContext(cartContext);

    const onAdd = (cantidad) => {
        addProduct(item, cantidad)
    }

    return (

        <div className="flex flex-row justify-center pt-10" id={item.id}>
            <Card className="flex flex-row">
                <Card.Img variant="top" className="h-fit m-auto mr-50 md:max-w-sm border-r-solid border-r-2 border-r-black" src={item.image} />
                <Card.Body>
                    <div className="ml-5">
                        <Card.Title className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</Card.Title>
                        <Card.Text>
                            <p className="text-3xl text-gray-900">Precio: $ {item.precio}</p>
                            <p >Marca: {item.marca}</p>
                            <p>Modelo: {item.modelo}</p>
                            <p>Caracteristicas: {item.caracteristicas}</p>
                        </Card.Text>
                        <ItemCount stock='10' initial={1} onAdd={onAdd} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )

}


export default ItemDetail;