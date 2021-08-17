import React from 'react';
import {Link} from 'react-router-dom';


function Item({item}) {

        return (

            <div className="row mt-5 g-0">
    
                {item.map((element, key) => {
    
                    return (
    
                        <div className="card col-3" key={key}>
    
                            <div className="row g-0">
            
                                <div className="col-5 col-sm-4">
                                    <img src={element.url} className="img-fluid w-100" alt="x"/>
                                </div>
            
                                <div className="col-7 col-sm-8">
            
                                    <div className="card-body">
            
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">{element.description}</p>
                                        <p className="card-text"><small className="text-muted">${element.price}</small></p>
    
                                        <Link to={`/item/${element.id}`}>
                                            <button className="btn btn-dark">+ info</button>
                                        </Link>
            
                                    </div>
            
                                </div>
            
                            </div>
            
                        </div>
    
                    )
    
                })}
    
            </div>
        )
}

export default Item;