import React from 'react';
import Item from './Item';


function ItemList({ articles }) {
    return (    
        <Item item={articles}/>
    )
}

export default ItemList;