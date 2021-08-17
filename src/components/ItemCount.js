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
        <div className="col-4 mt-5">

            <div className="col-10 text-center stock border rounded">{items /*MUESTRO INITIAL*/}</div>

            <button type="button" className="btn btn-success col-5 mt-3" onClick={() => { //BOTON SUMAR

                if (items < stock) {
                    setItems(items + 1);
                }

            }}>+</button>

            <button type="button" className="btn btn-danger col-5 mt-3" onClick={() => { //BOTON RESTAR

                if (items >= 1) {
                    setItems(items - 1);
                }

            }}>-</button>

            <button type="button" className="btn btn-dark col-10 mt-1" onClick={onAdd}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;