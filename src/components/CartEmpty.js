import React from 'react';
import { Link } from 'react-router-dom';


const CartEmpty = ({ text }) => {
    return (
        <div className="col-12 position-relative" id="cartEmpty">

            <div className="row">
                <div className="position-absolute top-50 start-50 translate-middle">

                <p className="col-12 text-center mt-5" id="cartEmptyText">{text}</p>

                <Link to="/" className="mt-5">
                    <button type="button" className="btn btn-outline-dark col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4" style={{borderRadius: 0}}>Back to products</button>
                </Link>
                </div>

            </div>

        </div>
    );
}

export default CartEmpty;