import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


function CartWidget() {

    let { totalQuantity } = useContext(CartContext);

    return (
        <>
            <p className="d-inline">Cart </p>
            <i className="fas fa-shopping-cart"></i> {totalQuantity}
        </>
    )
}

export default CartWidget;