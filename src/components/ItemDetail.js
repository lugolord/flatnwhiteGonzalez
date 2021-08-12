import React from 'react';

function hideItemDetail() {
    let itemDetail = document.getElementById('itemDetail');
    itemDetail.style.opacity = 0;
}

function ItemDetail({item}) {

    return (
        <div className="card col-3 g-0 position-fixed top-50 start-50 translate-middle" id="itemDetail">
            <div className="col-1 offset-11 closeCard" onClick={hideItemDetail}>X</div>
            <img src={item.image} className="card-img-top col-12" alt="card-top"/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.species}</p>
                <p className="card-text"><small className="text-muted">1000</small></p>
            </div>
        </div>
    )

}

export default ItemDetail;