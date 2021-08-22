import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    
    return (
        <>
            <nav className="nav col-4 align-self-center">
                <Link to="/category/shop" className="nav-link active text-dark">Shop</Link>
                <Link to="/category/learn" className="nav-link active text-dark" >Learn</Link>
                <Link to="/category/visitUs" className="nav-link active text-dark" >Visit us</Link>
            </nav>

            <Link to="/" className="col-4">
                <img src="/img/fnwLogo.png" id="brand" alt="fnw brand"/>
            </Link>
            

            <div className="col-4 text-end align-self-center">
                <p className="d-inline">Cart</p>
                <CartWidget/>
            </div>
        </>
    )
}

export default NavBar;