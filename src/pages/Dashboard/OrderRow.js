import React from 'react';

const OrderRow = ({order}) => {
    const {name, productName,email, quantity, img, phone, address,price,_id} = order;

    const cancelOrder = (id) =>{
        const proceed = window.confirm("Are you sure you want to delete this item?");
        if(proceed){

            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    return (
        <div className='flex flex-col md:flex-row py-5 px-5 justify-between items-center bg-accent rounded-xl shadow-lg'>
            <div className='basis-1/3'><img src={img} alt=""  className='w-2/3 rounded-md'/></div>
            <div className='basis-1/3 font-semibold text-[20px]'>

                <p>Order ID: {_id}</p>
                <p>Product Name: {productName}</p>
                <p>Total bill: ${quantity*price}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
            <div className='flex flex-col gap-5 basis-1/3'>
            <button class="btn btn-md btn-primary text-white">Payment</button>
            <button  class="btn btn-md bg-red-600 text-white">Cancel</button>
            </div>
        </div>
    );
};

export default OrderRow;