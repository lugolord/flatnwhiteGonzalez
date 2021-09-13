import React from 'react';


const Footer = () => {
    return (
        <div className="row" id="footer">
            
            <div className="col-12 col-xl-5 mt-5" id="newsLetter">
                <p className="text-light">Subscribe to our Newsletter</p>
                <p className="text-light">20% discount on your first purchase</p>
                <input type="text" placeholder="Your email"/>
                <button type="submit" className="btn btn-secondary rounded-0 d-block mt-3">Suscribe</button>
            </div>
        
            <nav className="nav col-12 col-lg-11 mt-5 mt-xl-5 mb-xl-3 d-block" id="navFooter">
                <a className="nav-link active d-md-inline d-xl-inline text-light" href="#!">About us</a>
                <a className="nav-link active d-md-inline d-xl-inline text-light" href="#!">FAQ</a>
                <a className="nav-link active d-md-inline d-xl-inline text-light" href="#!">Returns</a>
                <a className="nav-link active d-md-inline d-xl-inline text-light" href="#!">Terms and Conditions</a>
                <a className="nav-link active d-md-inline d-xl-inline text-light" href="#!">Contact</a>
            </nav>

            <a href="https://www.instagram.com/flatnwhiteba/" target="_blank" rel="noreferrer" className="mt-3 mt-lg-5 mb-3 mb-lg-3 mt-xl-5 mb-xl-3 col-1">
                <i className="fab fa-instagram fa-2x text-light"></i>
            </a>
            
        </div>
    );
}

export default Footer;