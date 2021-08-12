import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function getItems() {

    return (
        fetch('https://rickandmortyapi.com/api/character').then((response) => {
            return response.json();
        })   
    )

}

function ItemDetailContainer() {

    const [item, setItem] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            getItems().then((data) => {setItem(data.results[1])})
        }, 2000)
    
    }, []);

    return (
        <ItemDetail item={item} />
    )

}

export default ItemDetailContainer;