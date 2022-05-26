import React, { useState } from 'react';

const OrderRow = ({order, setOrder}) => {
    const {name, productName,email, quantity, img, phone, address,price,_id} = order;



    return (
        <div className='flex flex-col md:flex-row py-5 px-5 justify-between items-center bg-accent rounded-xl shadow-lg'>
            <div className='basis-1/3'><img src={img} alt=""  className='w-2/3 rounded-md'/></div>
            <div className='basis-1/3 font-semibold text-[20px]'>

                <p>Order ID: {_id}</p>
                <p>Product Name: {productName}</p>
                <p>Quantity: {quantity}</p>
                <p>Total bill: ${quantity*price}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
            <div className='flex flex-col gap-5 basis-1/3'>
            <button className="btn btn-md btn-primary text-white">Payment</button>
            <label htmlFor="confirm-modal" onClick={()=> setOrder(order)} className="btn modal-button btn-md bg-red-600 text-white">Cancel Order</label>
            </div>
        </div>
    );
};

export default OrderRow;