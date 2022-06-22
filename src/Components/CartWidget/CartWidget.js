import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';

import "./CartWidget.css"

const CartWidget = ({contador}) => {
    return (
        <div class="cart-widget">
            <ShoppingCartIcon fontSize="large" sx={{ color: grey[100] }} />
            {contador}
        </div>
    )
}

export default CartWidget