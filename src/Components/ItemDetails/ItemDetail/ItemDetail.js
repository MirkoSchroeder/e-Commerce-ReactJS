import ItemCount from "../../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function onAdd(cantidad) {
        console.log (`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }

const ItemDetail = ({item}) => {

    return (

        <div id={item.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
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