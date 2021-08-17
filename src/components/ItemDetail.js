import React from 'react';
import ItemCount from './ItemCount';


function ItemDetail({item}) {

    return (
        <div className="card">
            <div className="row g-0">
    
                <div className="col-5 col-sm-4">
                    <img src={item.url} className="img-fluid w-100" alt={item.title}/>
                </div>
                    
                <div className="col-7 col-sm-8">
    
                    <div className="card-body">
                        <h1 className="card-title">{item.title}</h1>
                        <p className="card-text mt-5">{item.description}</p>
                        <p className="card-text mt-5">${item.price}</p>                    
                        <ItemCount stock="10" initial="1" />
                    </div>
    
                </div>
    
            </div>
        </div>    
    )
}

export default ItemDetail;