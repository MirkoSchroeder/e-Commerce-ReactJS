import ItemCount from "../../ItemCount/ItemCount";

function onAdd(cantidad) {
        console.log (`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }

const ItemDetail = ({item}) => {

    return (
        <div id={item.id}>
            <img src={item.image} alt=""></img>
            <div>
                <h2>{item.title}</h2>
                <p>Precio: $ {item.precio}</p>
                <p>Marca: {item.marca}</p>
                <p>Modelo: {item.modelo}</p>
                <p>Caracteristicas: {item.caracteristicas}</p>
            </div>
            <ItemCount stock='10' initial={1} onAdd={onAdd} />
        </div>
    )

}


export default ItemDetail;