import React from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
    const {productId }= useParams();
    console.log(productId);

    
   
    return (
        <div>
            <h1 className="text-4xl font-bold text-primary">
                Place Order
            </h1>
        </div>
    );
};

export default PlaceOrder;