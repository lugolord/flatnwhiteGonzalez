import React, {useState} from 'react';

function ItemCount({stock, initial}) {

    function onAdd() {

        if (items !== 0 && items <= stock) { //Verifico que los items agregados al carrito no sean 0 y menores o iguales al stock disponible
            alert(`se agregaron ${items} al carrito`);
        }

    }

    const initialNum = parseInt(initial);  //Parseo el valor inicial pasado como parametro

    const [items, setItems] = useState(initialNum); //Establezco el estado inicial con el numero inicial pasado como parametro

    return (
        <div className="col-4 contador offset-4">

            <div className="col-10 text-center stock offset-1">{items /*MUESTRO INITIAL*/}</div>

            <button type="button" className="btn btn-success col-5 mt-3 offset-1" onClick={() => { //BOTON SUMAR

                if (items < stock) {
                    setItems(items + 1);
                }

            }}>+</button>

            <button type="button" className="btn btn-danger col-5 mt-3" onClick={() => { //BOTON RESTAR

                if (items >= 1) {
                    setItems(items - 1);
                }

            }}>-</button>

            <button type="button" className="btn btn-info col-10 offset-1" onClick={onAdd}>agregar al carrito</button>

        </div>
    )
}

export default ItemCount;