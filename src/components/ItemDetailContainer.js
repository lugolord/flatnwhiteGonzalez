import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from './Loader';


function getItems() {

    return (
        fetch('../products.json').then((response) => { //PROMESA A DATOS LOCALES
            return response.json();
        }) 
    )

}

function ItemDetailContainer() {

    const {id} = useParams();

    const [item, setItem] = useState([]); //ESTADO INICIAL DE LA PROMESA

    const [loader, setLoader] = useState(true); //ESTADO LOADER


    useEffect(() => {

        setTimeout(() => {  //CAMBIO EL ESTADO DEL LOADER
            setLoader(false)
        }, 3000);

        setTimeout(() => { //PARA SIMULAR RETRASOS DE RED
            
            getItems().then((data) => {

                const wantItItem = data.items.find(element => element.id === parseInt(id));
                
                setItem(wantItItem)}); //ACTUALIZO EL ESTADO CON EL ITEM DESEADO

        }, 2000);
    
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