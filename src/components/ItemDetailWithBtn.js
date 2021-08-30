import React from 'react';
import {Link} from 'react-router-dom';


function ItemDetailWithBtn({item}) {

    return (
        <div className="card">
            <div className="row g-0">
        
                <div className="col-5 col-sm-4">
                    <img src={item.img} className="img-fluid w-100" alt={item.name}/>
                </div>
                        
                <div className="col-7 col-sm-8">
        
                    <div className="card-body" id="shopDetail">
                        <h1 className="card-title">{item.name}</h1>
                        <p className="card-text mt-5">{item.description}</p>
                        <p className="card-text mt-5">${item.price}</p>
                        <Link to='/cart'>
                            <button type="button" className="btn btn-dark">Finalizar compra</button>
                        </Link>                    
                    </div>
        
                </div>
        
            </div>
        </div>
    )
}

export default ItemDetailWithBtn;