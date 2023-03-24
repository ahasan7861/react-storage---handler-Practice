import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 10;
    const second = 20;

    const total = add(first, second)
    

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetics;