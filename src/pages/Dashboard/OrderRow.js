import React, { useState } from 'react';

const OrderRow = ({order,refetch}) => {
    const {name, productName,email, quantity, img, phone, address,price,_id} = order;
    const [isConfirm, setIsConfirm] = useState(false);

    if(isConfirm){

        fetch(`http://localhost:5000/order/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                  setIsConfirm(false);
                  refetch();  
                }
            })
            
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
            <label for="confirm-modal" class="btn modal-button btn-md bg-red-600 text-white">open modal</label>
            </div>
            <div>
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
    <div class="modal-action">
      <label onClick={()=> setIsConfirm(true)} for="confirm-modal" class="btn">Yes, I am sure</label>
      <label onClick={()=> setIsConfirm(false)} for="confirm-modal" class="btn">No</label>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default OrderRow;