import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import { Link } from "react-router-dom";

import "./CartWidget.css"

const CartWidget = ({onCart}) => {
    return (
        <Link to='/Cart'>
            <div className="cart-widget">
                <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />
                {onCart}
            </div>
        </Link>
    )
}

export default CartWidget