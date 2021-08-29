import React, { useState } from 'react';


export const CartContext = React.createContext({});

export default function CartProvider({children}) {

    const [items, setItems] = useState([]); //ARRAY DE OBJETOS DONDE ESTARAN LOS ITEMS SELECCIONADOS POR EL USUARIO

    let totalQuantity = 0; //CANTIDAD TOTAL DE ITEMS

    items.forEach(item => totalQuantity += item.quantity); //ACTUALIZA LA CANTIDAD DE ITEMS PARA MOSTRAR EN LA NAVBAR

    function notInCart(item) { //VERIFICA SI EL ITEM YA ESTA EN EL CARRITO
        
        let searchItem = items.find(currentItem => currentItem.item.id === item.item.id);

        searchItem === undefined ? searchItem = true : searchItem = false;

        return searchItem;
    }

    function addToCart(item) { //AGREGA AL CARRITO

        notInCart(item) ? setItems([...items, item]) : alert('producto ya en el carrito');

    }

    function removeFromCart(item) { //REMUEVE DEL CARRITO EL ITEM SELECCIONADO Y ACTUALIZA EL ESTADO

        let itemPosition = items.indexOf(item);

        items.splice(itemPosition, 1);

        setItems([...items]);

    }

    return (
        <CartContext.Provider value={{items, addToCart, notInCart, removeFromCart, setItems, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}