import React from 'react';
import ItemCount from "./ItemCount";
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
    return (
        <>
            <div className="col-12 text-center">
                <h1>{greeting}</h1>
            </div>
            
            <ItemCount stock="10" initial="1"/>

            <ItemList/>
            
        </>
    )
}

export default ItemListContainer;