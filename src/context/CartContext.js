import React, { useState } from 'react';

export const CartContext = React.createContext({});

export default function CartProvider({children}) {

    const [items, setItems] = useState([]); //ARRAY DE OBJETOS DONDE ESTARAN LOS ITEMS SELECCIONADOS POR EL USUARIO 

    function notInCart(item) { //VERIFICA SI EL ITEM YA ESTA EN EL CARRITO
        
        let searchItem = items.find(currentItem => currentItem.item.id === item.item.id);

        searchItem === undefined ? searchItem = true : searchItem = false;

        return searchItem;
    }

    function addToCart(item) { //AGREGA AL CARRITO

        if (notInCart(item)) {
            setItems([...items, item]);
        }
        else {
            alert('Producto ya en el carrito');
        }
    }

    return (
        <CartContext.Provider value={{items, addToCart, notInCart}}>
            {children}
        </CartContext.Provider>
    )
}