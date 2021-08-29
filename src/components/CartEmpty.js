import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <>
            <h1 className="col-12 text-center mt-5">There's nothing here :(</h1>
            <Link to="/" className="col-4 mt-5 offset-4">
                <button type="button" className="btn btn-outline-dark col-12">Back to products</button>
            </Link>
        </>
    );
}

export default CartEmpty;
