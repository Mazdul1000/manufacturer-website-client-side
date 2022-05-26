import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order, setOrder}) => {
    const { productName,email, quantity, img, phone, address,price,_id, paid} = order;
     console.log(order)


    return (
        <div className='flex flex-col md:flex-row  py-5 px-5 md:justify-between justify-center items-center bg-accent rounded-xl shadow-lg '>
            <div className='basis-1/3 flex justify-center md:justify-start'><img src={img} alt=""  className='w-2/3 rounded-md'/></div>
            <div className='basis-1/3 font-semibold text-[20px]'>

                <p>Order ID: {_id}</p>
                <p>Product Name: {productName}</p>
                <p>Quantity: {quantity}</p>
                <p>Total bill: ${quantity*price}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
            </div>
            <div className='flex md:flex-col justify-start md:justify-center gap-5 basis-1/3'>
            {(!paid) && <Link className='btn btn-md btn-primary text-white w-2/3 md:w-full' to={`/dashboard/payment/${_id}`}>Pay</Link>}
            {(paid ) && <button className="btn btn-md  btn-primary w-2/3 md:w-full text-white" disabled>Paid</button>}
            {!paid && <label htmlFor="confirm-modal w-2/3 md:w-full" onClick={()=> setOrder(order)} className="btn modal-button w-2/3 md:w-full btn-md bg-red-600 text-white border-0">Cancel Order</label>}
            {paid &&<label htmlFor="confirm-modal" onClick={()=> setOrder(order)} className="btn modal-button btn-md w-2/3 md:w-full bg-red-600 text-white border-0" disabled>Cancel Order</label>}
            </div>
        </div>
    );
};

export default OrderRow;