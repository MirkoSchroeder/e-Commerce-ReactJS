import { useEffect, useState } from "react"; 
import ItemDetail from "../ItemDetail/ItemDetail";
import ProductoListado from "../../../productos";
import './ItemDetailContainer.css'


const promesa = new Promise ((res,rej) =>{
    setTimeout(()=>{
        res(ProductoListado[0]);
    },2000)
});

function ItemDetailContainer() {

    const [placaVideo, setplacaVideo] = useState ({});

    const getItem = () => {
            promesa.then((placaVideo) => {
                setplacaVideo(placaVideo);
            })
            .catch (() => {
                console.log ("No cargo el producto")
            })
    }

    return (
        <div className="DetailContainer">
            <button onClick={getItem}>Ver mas info</button>
            {Object.keys(placaVideo).length !== 0 ? (
                <ItemDetail item={placaVideo} />
            ) : (
                ""
            )}
        </div>
        
    )

}

export default ItemDetailContainer