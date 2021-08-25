import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import ItemDetailWithBtn from './ItemDetailWithBtn';


const stock = 10;

function ItemDetail({item}) {

    const { addToCart, notInCart } = useContext(CartContext) //USO EL CONTEXTO DEL CARRITO

    const [counter, setCounter] = useState(1); // ESTADO PARA ALMACENAR LA CANTIDAD DE ITEMS QUE QUIERE COMPRAR EL USUARIO

    const [addedToCart, setAddedToCart] = useState(false);

    function handleCounter(info) { // HANDLER DEL EVENTO ONADD
        setCounter(info);
    }

    function onAdd() {

        if (counter > 0 && counter <= stock) { //Verifico que los items agregados al carrito no sean 0 y menores o iguales al stock disponible

            const itemToAdd = { item, quantity: counter }; //FORMATO DEL OBJETO QUE PIDE EL DESAFIO

            addToCart(itemToAdd);

            if (notInCart(itemToAdd)) {
                alert(`se agregaron ${counter} al carrito`);
                setAddedToCart(true);
            }

        }    
    }

    if (addedToCart && counter > 0) { //SI EL ITEM NO ESTABA EN EL CARRITO Y LA CANTIDAD ES MAYOR A 0 MUESTRO EL BOTON FINALIZAR COMPRA
        return <ItemDetailWithBtn item={item}/>;
    }
    
    return (
        <div className="card">
            <div className="row g-0">
    
                <div className="col-5 col-sm-4">
                    <img src={item.url} className="img-fluid w-100" alt={item.title}/>
                </div>
                    
                <div className="col-7 col-sm-8">
    
                    <div className="card-body" id="shopDetail">
                        <h1 className="card-title">{item.title}</h1>
                        <p className="card-text mt-5">{item.description}</p>
                        <p className="card-text mt-5">${item.price}</p>                    
                        <ItemCount stock={stock} counter={counter} handleCounter={handleCounter} id="itemCount" onAdd={onAdd}/>
                    </div>
    
                </div>
    
            </div>
        </div>    
    )
}

export default ItemDetail;