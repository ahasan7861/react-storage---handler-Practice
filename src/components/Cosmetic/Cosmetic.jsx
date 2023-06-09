import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
// import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import './Cosmetic.css'

const Cosmetic = (props) => {

    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        addToDb(id);
    }

    const addToCartWithParam = () => addToCart(id)

    const removeFromCart = (id) =>{
        removeFromDb(id);
    }

    const allStorageDelete = (id) =>{
        deleteShoppingCart(id)
    }


    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>

            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={()=> addToCart(id)}>Purchase: shortCut niom</button>

            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => allStorageDelete(id)}>All storage Delete</button>
        </div>
    );
};

export default Cosmetic;