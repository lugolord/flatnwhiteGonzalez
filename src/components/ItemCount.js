import React from 'react';
import Modal from './Modal';
import { Link } from "react-router-dom";


function ItemCount({ stock, handleCounter, counter, onAdd, addedToCart }) {

    return (
        <div className="col-12 mt-5">

            <div className="col-12 text-center stock border border-dark">{counter}</div>

            <button type="button" className="btn btn-danger col-6 mt-1" style={{borderRadius: 0}} onClick={() => { //BOTON RESTAR

                if (counter >= 1) {
                    handleCounter(counter - 1);
                }

            }}>-</button>
            
            <button type="button" className="btn btn-success col-6 mt-1" style={{borderRadius: 0}} onClick={() => { //BOTON SUMAR

                if (counter < stock) {
                    handleCounter(counter + 1);
                }

            }}>+</button>


            {
                // BOTON ONADD
                counter > 0 ? 
                <Modal onAdd={onAdd} /> 
                : 
                <Link to="/">
                    <button type="button" className="btn btn-outline-dark col-12 mt-1" style={{borderRadius: 0}}>Back to products</button>
                </Link>
            }
        </div>
    )
}

export default ItemCount;