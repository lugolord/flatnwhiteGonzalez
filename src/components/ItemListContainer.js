import React from 'react';

function ItemListContainer({greeting}) {
    return (
        <div className="col-12 text-center">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;