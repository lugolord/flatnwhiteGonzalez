import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartWithProducts from './CartWithProducts';
import CartEmpty from './CartEmpty';

function Cart() {

    let { items, removeFromCart } = useContext(CartContext);

    return (
        items.length === 0 ? <CartEmpty/> : <CartWithProducts items={items} removeFromCart={removeFromCart}/>
    )
}

export default Cart;