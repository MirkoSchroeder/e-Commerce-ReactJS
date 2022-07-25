import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.css"
import Card from 'react-bootstrap/Card';
import { cartContext } from "../../Context/CartContext.js";
import { useContext } from "react";


const ItemDetail = ({ item }) => {
    
    const { addProduct } = useContext(cartContext);

    const onAdd = (cantidad) => {
        addProduct(item,cantidad)
        console.log(`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }

    return (

        <div id={item.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="imgItemDetail" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        <h2>{item.title}</h2>
                        <p>Precio: $ {item.precio}</p>
                        <p>Marca: {item.marca}</p>
                        <p>Modelo: {item.modelo}</p>
                        <p>Caracteristicas: {item.caracteristicas}</p>
                    </Card.Text>
                <ItemCount stock='10' initial={1} onAdd={onAdd} />
                </Card.Body>
            </Card>
        </div>
    )

}


export default ItemDetail;