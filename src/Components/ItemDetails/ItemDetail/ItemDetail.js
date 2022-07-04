
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
        </div>
    )

}


export default ItemDetail;