import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';


function ItemDetailContainer() {

    const {id} = useParams();

    const [item, setItem] = useState([]); //ESTADO INICIAL DE LA PROMESA

    const [loader, setLoader] = useState(true); //ESTADO LOADER


    useEffect(() => {

        setTimeout(() => {  //CAMBIO EL ESTADO DEL LOADER
            setLoader(false)
        }, 3000);

        //ACCEDO A FIRESTORE

        const db = getFirestore();

        const itemCollection = db.collection('cafeteras');

        itemCollection.get().then(querySnapshot => {

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
    else {
        return (
            <ItemDetail item={item} /> 
            
        )
    }
}

export default ItemDetailContainer;