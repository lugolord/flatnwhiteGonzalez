import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


function NavBar() {

    let { totalQuantity } = useContext(CartContext);
    
    return (
        <>
            <nav className="nav col-12 col-sm-6 col-md-2 col-lg-3 order-2 order-sm-2 order-md-1 align-self-center">

                <NavLink to="/category/shop" activeClassName="activeNavLink" className="navLink mx-3 mx-sm-2">Shop</NavLink>

                <NavLink to="/category/learn" activeClassName="activeNavLink" className="navLink mx-3 mx-sm-2" >Learn</NavLink>

                <NavLink to="/category/visitUs" activeClassName="activeNavLink" className="navLink mx-3 mx-sm-2" >Visit us</NavLink>
                
            </nav>

            <Link to="/" className="col-12 col-sm-12 col-md-8 col-lg-6 mb-3 text-center order-md-2">
                <img src="/img/fnwLogo.png" id="brand" alt="fnw brand" className="col-12 col-lg-9"/>
            </Link>
            
            <NavLink to="/cart" activeClassName="activeCartLink" className="col-12 col-sm-6 col-lg-2 col-md-2 offset-sm-0 offset-md-0 offset-lg-1 order-3 order-sm-3 text-end align-self-center cartLink">
                {totalQuantity === 0 ? 'Cart' : <CartWidget/>}
            </NavLink>
        </>
    )
}

export default NavBar;