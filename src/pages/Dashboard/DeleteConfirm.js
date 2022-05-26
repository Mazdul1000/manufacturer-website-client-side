import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({item,order, refetch, setItem, setOrder, orderRefetch}) => {

    const handleRemove = (item, order) => {
      
    if(item){
        fetch(` https://agri-tools.herokuapp.com/product/${item._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
              toast('Product has been removed');
              setItem(null);
              refetch();
            }
        })
    }

    if(order){
        fetch(` https://agri-tools.herokuapp.com/order/${order._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                orderRefetch();
              toast('Order has been removed');
              setOrder(null);
                
            }
        })
    }

}

    return (
        <div>
             <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
    <div className="modal-action">
      <label onClick={()=> handleRemove(item, order)} htmlFor="confirm-modal" className="btn">Yes, I am sure</label>
      <label htmlFor="confirm-modal" className="btn">No</label>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default DeleteConfirm;