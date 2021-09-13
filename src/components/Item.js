import React from 'react';
import { Link } from 'react-router-dom';


function Item({ item }) {

        return (

            <div className="col-12 mt-5">

                <div className="row">
    
                    {item.map((element, key) => {
        
                        return (

                            <div className="col-12 col-sm-8 col-md-6 col-lg-3 offset-sm-2 offset-md-0 mb-5" key={key}>

                                <img src={element.img} className="col-12 itemList" alt={element.name}/>

                                <p className="mt-3 itemName">{element.name}</p>

                                <p className="itemPrice">${element.price}</p>

                                <Link to={`/item/${element.id}`}>
                                    <button type="button" className="btn btn-outline-dark col-12" style={{borderRadius: 0}}>+ info</button>
                                </Link>
                                
                            </div>

                        )
                    })}
                    
                </div>

            </div>
        )
}

export default Item;