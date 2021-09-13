import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { useTransition, animated } from '@react-spring/web';
import { NavLink } from 'react-router-dom';


const FilterAndSearch = ({ getFromDatabase, setLoader, nameFilter }) => {

    const [visible, setVisible] = useState(false); // ESTADO PARA MOSTRAR/OCULTAR LA BARRA DE BUSQUEDA

    const transition = useTransition(visible, { // ANIMACION DE LA BARRA DE BUSQUEDA
        from: { height: 0 },
        enter: { height: 20 },
        leave: { height: 0 },
    })
    
    return (
        <div className="row">

            <div className="col-12 col-sm-8 col-md-6 text-center text-md-start mb-4">

                <NavLink to="/all" activeClassName="activeCategoryFilter" className="d-inline categoryFilter" id="all" onClick={() => {

                    setLoader(true);

                    getFromDatabase();

                }}>All / </NavLink>

                <NavLink to="/coffee" activeClassName="activeCategoryFilter" className="d-inline categoryFilter" id="coffee" onClick={() => {
                    
                    setLoader(true);

                    getFromDatabase('coffee');

                }}>Coffee / </NavLink>

                <NavLink to="/coffeeMakers" activeClassName="activeCategoryFilter" className="d-inline categoryFilter" id="coffeeMaker" onClick={() => {
                    
                    setLoader(true);

                    getFromDatabase('coffeeMaker');

                }}>Coffee makers / </NavLink>

                <NavLink to="/accessories" activeClassName="activeCategoryFilter"  className="d-inline categoryFilter" id="accessory" onClick={() => {
                    
                    setLoader(true);

                    getFromDatabase('accessory');

                }}>Accessories</NavLink>

            </div>

            <div className="col-12 col-sm-3 col-lg-2 col-md-2 offset-sm-1 offset-md-4 offset-lg-4 text-center text-md-end">
                <div id="searchBtn" onClick={() => setVisible(!visible)}>Search <i className="fas fa-search"></i></div>
            </div>

            {transition((style, item) => 
                item ? 
                <animated.div style={style} className="col-12">
                    <div className="row">
                        <SearchBar nameFilter={nameFilter} setVisible={setVisible}/>
                    </div>
                </animated.div> 
                : 
                ''
            )}
        </div>
    );
}

export default FilterAndSearch;