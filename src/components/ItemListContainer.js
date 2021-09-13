import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import FilterAndSearch from './FilterAndSearch';
import Loader from './Loader';
import { getFirestore } from '../firebase'


function ItemListContainer() {

    const [articles, setArticles] = useState([]); // PRODUCTOS QUE SE MUESTRAN

    const [loader, setLoader] = useState(true); //MUESTRA/OCULTA LOADER

    const [filterItems, setFilterItems] = useState([]); // ITEMS FILTRADOS POR LA BARRA DE BUSQUEDA
    
    const [found, setFound] = useState(); //TRUE SI SE ENCUENTRA ALGUN PRODUCTO CON LA BARRA DE BUSQUEDA

    function getFromDatabase(category) {

        setTimeout(() => { 
            setLoader(false)
        }, 2000);
        
        //ACCEDO A FIRESTORE
        const db = getFirestore();

        const productsCollection = db.collection('products');

        productsCollection.get().then(querySnapshot => {

            if (querySnapshot.size === 0) {
                console.log('no items');
            }
            
            const products = querySnapshot.docs.map(document => document.data());

            if(category === undefined) {

                setArticles(products);

                setFilterItems(products);
            }
            else if (category === 'coffee') {

                const coffees = products.filter(element => element.type === category);

                setArticles(coffees);

                setFilterItems(coffees);
            }
            else if (category === 'coffeeMaker') {

                const coffeeMakers = products.filter(element => element.type === category);
                
                setArticles(coffeeMakers);

                setFilterItems(coffeeMakers);
            }
            else if (category === 'accessory') {

                const accessories = products.filter(element => element.type === category);
                
                setArticles(accessories);

                setFilterItems(accessories);
            }
        })
    }

    function nameFilter(e) {

        if (e === undefined) {
            return;
        }
        
        let inputText = e.target.value.toLowerCase();

        let filteredItems = articles.filter( element => {
            
            let itemName = element.name.toLowerCase();

            if (itemName.indexOf(inputText) !== -1) {
                setFound(true)
                return element;
            }
            else {
                setFound(false);
                return null;
            }   
        })

        setFilterItems(filteredItems);
    }

    useEffect(() => {

        getFromDatabase();

        setTimeout(() => { 
            setLoader(false)
        }, 2000);        

    }, []);

    if (loader) {
        return <Loader/>
    }
    else if (filterItems.length !== 0) {
        return (
            <>
                <div className="col-12 mt-5">
                    <FilterAndSearch getFromDatabase={getFromDatabase} setLoader={setLoader} nameFilter={nameFilter}/>
                </div>
    
                <ItemList className="mt-3" articles={filterItems}/>
            </>
        )
    }
    else if (found === false) {
        return (
            <>
                <div className="col-12 mt-5 position-relative" id="noResults">

                    <FilterAndSearch getFromDatabase={getFromDatabase} setLoader={setLoader} nameFilter={nameFilter}/>

                    <p className="mt-5 text-center position-absolute top-50 start-50 translate-middle" id="noResultsP">No results bro/sis :/</p>

                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="col-12 mt-5">
                    <FilterAndSearch getFromDatabase={getFromDatabase} setLoader={setLoader} nameFilter={nameFilter}/>
                </div>
    
                <ItemList className="mt-3" articles={articles}/>
            </>
        )
    }
}

export default ItemListContainer;