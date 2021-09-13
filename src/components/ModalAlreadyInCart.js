import React from 'react';


const ModalAlreadyInCart = () => {
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
                            Product already in cart!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" style={{borderRadius: 0}}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalAlreadyInCart;
