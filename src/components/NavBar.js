import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <nav className="nav col-4 align-self-center">
                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                <a className="nav-link disabled" href="#">Learn</a>
                <a className="nav-link disabled" href="#">Visit us</a>
            </nav>

            <img src="img/fnwLogo.png" className="col-4"/>

            <div className="col-4 text-end align-self-center">
                <a href="#" className="text-decoration-none">Cart</a>
                <CartWidget/>
            </div>
        </>
    )
}

export default NavBar;