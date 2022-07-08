import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const { id } = useParams()

    useEffect(() => {
        fetch("./productos.json")
            .then((response) => {
                return response.json()
            })
        .then((json) => {
            console.log (json)
            const filterArray = json.filter((product) => {
                console.log(product.id)
                console.log(id)
                return product.id === id
            })
            setProducto(filterArray[0])
        });
}, [id]);

    return (
        <div>
            {Object.keys(producto).length !== 0 ? (
                <ItemDetail item={producto} />
            ) : (
                ""
            )}
        </div>
    )

}

export default ItemDetailContainer