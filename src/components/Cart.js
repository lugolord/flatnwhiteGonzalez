import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import CartWithProducts from './CartWithProducts';
import CartEmpty from './CartEmpty';
import Loader from './Loader';


function Cart() {

    const [loader, setLoader] = useState(true); // MUESTRO LOADER

    const [text, setText] = useState('There´s nothing here :('); // TEXTO MOSTRADO CUANDO EL CARRITO ESTA VACIO

    useEffect(() => {
        
        setTimeout(() => { // OCULTO LOADER
            setLoader(false)
        }, 2000);
        
    }, []);


    let { items, removeFromCart } = useContext(CartContext);

    if (loader) {
        return <Loader/>
    }
    else {
        return (
            items.length === 0 ? <CartEmpty text={text} /> : <CartWithProducts items={items} removeFromCart={removeFromCart} setText={setText} setLoader={setLoader}/>
        )
    }
}

export default Cart;