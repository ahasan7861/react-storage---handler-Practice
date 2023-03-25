import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
   
    const cosmetics = [
        {id: 1, name: 'Soap', price: 50},
        {id: 2, name: 'Lip Stick', price: 70},
        {id: 3, name: 'Hair Oil', price: 250},
        {id: 4, name: 'Body Spray', price: 350},
        {id: 5, name: 'Eye Vru', price: 30},
        {id: 6, name: 'Nail Polish', price: 60},
        {id: 7, name: 'Powder', price: 120},
        {id: 8, name: 'Snow', price: 140},
    ]

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
           </div> 
    );
};

export default Cosmetics;