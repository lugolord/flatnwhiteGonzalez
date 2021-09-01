import React from 'react';
import { getFirestore } from '../firebase';


function CartWithProducts({items, removeFromCart}) {

    function sendOrder(order, shopTotal) {

        const database = getFirestore();

        const shopOrders = database.collection('shopOrders');

        const newOrder = {
            buyer: 'Drake',
            articles: order,
            toPay: shopTotal
        }

        shopOrders.add(newOrder).then(({id}) => console.log(id));

    }

    let total = 0;

    return (
        <>
            <h1>Your cart ({items.length})</h1>

            <hr></hr>

            {items.map((item, key) => {

                let subtotal = item.item.price * item.quantity;

                total = total + subtotal;

                return (
                    <div className="col-12 border border-top-0 border-dark d-flex" key={key}>

                        <img src={item.item.img} alt={item.item.description} className="col-1 mt-1 cartImg" />

                        <div className="col-9">

                            <h1>{item.item.name} x {item.quantity}</h1>

                            <h2 className="mt-5">Subtotal: ${subtotal}</h2>

                            <button type="button" className="btn btn-outline-danger col-3 mt-5" onClick={() => {
                                removeFromCart(item);
                            }}>
                                Delete
                            </button>

                        </div>

                    </div>
                )
            })}

            <h1 className="mt-5">Total: ${total}</h1>

            <button type="button" className="btn btn-outline-success col-3" onClick={() => {
                sendOrder(items, total);
            }}>
                Close deal
            </button>

        </>
    );
}

export default CartWithProducts;