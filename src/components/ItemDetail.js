import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Cart from './Cart';


const stock = 10; // STOCK DE PRODUCTOS

function ItemDetail({ item }) {

    const { addToCart, notInCart } = useContext(CartContext) //USO EL CONTEXTO DEL CARRITO

    const [counter, setCounter] = useState(1); // ESTADO PARA ALMACENAR LA CANTIDAD DE ITEMS QUE QUIERE COMPRAR EL USUARIO

    const [addedToCart, setAddedToCart] = useState(false);

    function handleCounter(info) { // HANDLER DEL EVENTO ONADD
        setCounter(info);
    }

    function onAdd() {

        // Verifico que los items agregados al carrito no sean 0 y menores o iguales al stock disponible
        if (counter > 0 && counter <= stock) { 

            const itemToAdd = { item, quantity: counter }; 

            addToCart(itemToAdd);

            if (notInCart(itemToAdd)) {
                setAddedToCart(true);
            }
        }    
    }

    if (addedToCart && counter > 0) { //SI EL ITEM NO ESTABA EN EL CARRITO Y LA CANTIDAD ES MAYOR A 0 MUESTRO EL CARRITO
        return <Cart/>
    }
    
    return (
        <div className="col-12 mt-4 mb-4">

            <div className="row">

                <img src={item.img} alt={item.name} className="col-10 col-md-6 col-lg-4 imgDetail offset-1 offset-md-0 offset-lg-2"/>

                <div className="col-10 col-md-6 col-lg-4 offset-1 offset-md-0">

                    <p className="itemDetailName">{item.name}</p>

                    <p className="itemPrice">${item.price}</p>
                    
                    <p className="mt-3 mt-lg-0 text-center">{item.description}</p>

                    <ItemCount stock={stock} counter={counter} handleCounter={handleCounter} id="itemCount" onAdd={onAdd} addedToCart={addedToCart}/>

                </div>

            </div>
            
        </div>    
    )
}

export default ItemDetail;