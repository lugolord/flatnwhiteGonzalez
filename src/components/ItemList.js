import React, { useState, useEffect } from 'react';
import Item from './Item'

//ARRAY DE OBJETOS CON LOS ITEMS
const items = [{id: 1, title: 'aeropress', description: 'descripcion aeropress', price: 10000, url: 'img/items/aeropress.jpg'},
               {id: 2, title: 'aeropress', description: 'descripcion aeropress', price: 10000, url: 'img/items/aeropress.jpg'},
               {id: 3, title: 'aeropress', description: 'descripcion aeropress', price: 10000, url: 'img/items/aeropress.jpg'},
               {id: 4, title: 'aeropress', description: 'descripcion aeropress', price: 10000, url: 'img/items/aeropress.jpg'}];


//DEFINO PROMESA
function makePromise() {

    return(
        new Promise((resolve, reject) => {
            setTimeout(() => {resolve(items)}, 2000);
        })    
    )

}


function ItemList() {

    const [articles, setArticles] = useState([]); //ESTADO INICIAL

    useEffect(() => {

        makePromise().then((data) => { //REALIZO LA PROMESA

            const itemsResult = data.map(item => item); //GUARDO CADA UNO DE LOS ITEMS EN UN NUEVO ARRAY

            setArticles(itemsResult); //SETEO EL ESTADO CON LO OBTENIDO DE LA PROMESA
        })

    }, []);

    
    return (    
        <Item item={articles}/>
    );
}

export default ItemList;