import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import NotFound from './NotFound';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const {id} = useParams();

    const [item, setItem] = useState([]); // ITEM DEL CUAL SE MOSTRARA EL DETALLE

    const [loader, setLoader] = useState(true); // MUESTRA/OCULTA LOADER


    useEffect(() => {

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

            const products = querySnapshot.docs.map(document => document.data()); //OBTENGO LA DATA DE LOS PRODUCTOS

            const wantItItem = products.find(product => product.id === id); //BUSCO EL ITEM CON EL MISMO ID

            setItem(wantItItem);

        })

        return (
            setItem([])
        )
    
    }, [id]);

    if (loader) {
        return <Loader/>
    }
    else if (item === undefined) {
        return <NotFound/>
    }
    else {
        return (
            <ItemDetail item={item} />    
        )
    }
}

export default ItemDetailContainer;