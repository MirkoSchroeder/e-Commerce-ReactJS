import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { useContext} from "react"
import { cartContext } from "../Context/CartContext.js";
import "./CartWidget.css"

const CartWidget = ({ onCart }) => {
    
    const { getProductQty } = useContext(cartContext);

    return (
        <>
            <Link to='/Cart'>
                <div className="cart-widget">
                    <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />
                    {getProductQty}
                </div>
            </Link>
        </>
    )
}

export default CartWidget