import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase"

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const { id } = useParams()

    useEffect(() => {
        
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result) => {
                const id = result.id;
                const item = { id, ...result.data() };
                setProducto(item);
            })
            .catch((error) => {
                console.log(error);
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