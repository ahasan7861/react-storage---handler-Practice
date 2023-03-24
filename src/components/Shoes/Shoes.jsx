import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {

    const first = 5;
    const second = 5;
    
    const result = multiply(first, second)
    const sum = add(first, second)

    return (
        <div>
            <h2>This is Shoes Component</h2>
            <p>Result: {result}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;