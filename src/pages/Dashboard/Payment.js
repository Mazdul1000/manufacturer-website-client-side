import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {orderId} = useParams();
    return (
        <div>
            <h2 className="text-2xl text-primary">Please pay for : {orderId}</h2>
        </div>
    );
};

export default Payment;