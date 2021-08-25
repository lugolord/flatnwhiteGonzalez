import React from 'react';


function ItemCount({stock, handleCounter, counter, onAdd}) {


    return (
        <div className="col-4 mt-5">

            <div className="col-10 text-center stock border rounded">{counter /*MUESTRO INITIAL*/}</div>

            <button type="button" className="btn btn-success col-5 mt-3" onClick={() => { //BOTON SUMAR

                if (counter < stock) {
                    handleCounter(counter + 1);
                }

            }}>+</button>

            <button type="button" className="btn btn-danger col-5 mt-3" onClick={() => { //BOTON RESTAR

                if (counter >= 1) {
                    handleCounter(counter - 1);
                }

            }}>-</button>

            <button type="button" className="btn btn-dark col-10 mt-1" onClick={onAdd}> 
                    Agregar al carrito
            </button>

        </div>
    )
}

export default ItemCount;