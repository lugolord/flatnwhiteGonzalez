import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ModalAlreadyInCart from './ModalAlreadyInCart';


const Modal = ({ onAdd }) => {

    const { id } = useParams();

    const { items } = useContext(CartContext);

    const [alreadyInCart, setAlreadyInCart] = useState(false); 

    useEffect(() => {
        
        const itemInCart = items.some(item => item.item.id === id)
        
        if (itemInCart) {
            setAlreadyInCart(true);
        }

    }, [id, items]);

    if (alreadyInCart) {
        return <ModalAlreadyInCart/>
    }
    
    return (
        <>
            <button type="button" className="btn btn-outline-dark col-12 mt-1" style={{borderRadius: 0}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add to cart
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">f&w</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Click confirm to add to cart
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" style={{borderRadius: 0}} onClick={onAdd}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
