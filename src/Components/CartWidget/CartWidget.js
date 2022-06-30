import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

import "./CartWidget.css"

const CartWidget = ({onCart}) => {
    return (
        <div className="cart-widget">
            <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />
            {onCart}
        </div>
    )
}

export default CartWidget