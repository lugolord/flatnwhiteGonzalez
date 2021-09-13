import React from 'react';
import { getFirestore } from '../firebase';
import UserForm from './UserForm';


function CartWithProducts({ items, removeFromCart, setText, setLoader }) {

    // ENVIA ORDEN A FIREBASE
    function sendOrder(clientInfo, order, shopTotal, date) { 

        const database = getFirestore();

        const shopOrders = database.collection('shopOrders');

        const newOrder = {
            client: clientInfo,
            articles: order,
            toPay: shopTotal,
            orderDate: date
        }

        shopOrders.add(newOrder).then(({id}) => {
            setText('Thanks for your purchase! Your order ID is: ' + id);
            setLoader(false);
        });
    }

    // TOTAL DE COMPRA
    let total = 0; 

    return (
        <>
            <div className="cart col-12 col-md-7 col-lg-8">

                <h1 className="text-light text-center mt-2">Your cart ({items.length})</h1>

                <hr className="text-light"></hr>

                <div className="d-flex flex-row row flex-nowrap" id="cartSlider">

                    {items.map((item, key) => {

                        let subtotal = item.item.price * item.quantity;

                        total = total + subtotal;

                        return (
                            <div className="d-flex flex-column col-10 col-sm-6 col-md-6 col-lg-3 offset-1 offset-sm-0" key={key}>

                                <img src={item.item.img} alt={item.item.description} className="mt-1 cartImg"/>

                                <p className="text-light mt-3 text-center mb-0">{item.item.name}</p>

                                <div className="row">

                                    <p className="text-light d-inline col-6 text-center">Qty: {item.quantity}</p>

                                    <p className="text-light d-inline col-6 text-center">${subtotal}</p>

                                </div>


                                <button type="button" className="btn btn-outline-light" style={{borderRadius: 0}} onClick={() => {
                                    removeFromCart(item);
                                }}>
                                    Delete
                                </button>

                            </div>
                        )
                    })}
                </div>

            </div>

            <div className="col-12 col-md-5 col-lg-4 cartResume position-relative">
                <div>
            
                    <p className="mt-3">Before we finish, we need a couple of details from you {'<3'}</p>

                    <UserForm sendOrder={sendOrder} items={items} total={total} setText={setText} setLoader={setLoader}/>

                    <h1 className="col-12 text-center mt-5">Total: ${total}</h1>

                </div>
            </div>
        </>
    );
}

export default CartWithProducts;