import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import Item from './Item'
import Loader from './Loader';


function ItemList() {

    const [articles, setArticles] = useState([]); //ESTADO INICIAL

    const [loader, setLoader] = useState(true); //ESTADO LOADER

    useEffect(() => {

        setTimeout(() => { //CAMBIO ESTADO DEL LOADER
            setLoader(false)
        }, 3000);

        //ACCEDO A FIRESTORE

        const db = getFirestore();

        const itemCollection = db.collection('cafeteras');

        itemCollection.get().then(querySnapshot => {

            if (querySnapshot.size === 0) {
                console.log('no items');
            }
            
            const products = querySnapshot.docs.map(document => document.data());
            
            setArticles(products);
        })

    }, []);

    if (loader) {
        return <Loader/>
    }
    else {
        return (    
            <Item item={articles}/>
        )
    }
}

export default ItemList;