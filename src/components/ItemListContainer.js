import React from 'react';
import ItemCount from "./ItemCount";

function ItemListContainer({greeting}) {
    return (
        <>
            <div className="col-12 text-center">
                <h1>{greeting}</h1>
            </div>
            
            <ItemCount stock="10" initial="1"/>
            
        </>
    )
}

export default ItemListContainer;