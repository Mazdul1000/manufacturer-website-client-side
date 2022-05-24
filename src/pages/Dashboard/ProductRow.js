import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({product, index, refetch}) => {
    const {name, stock, price,img, _id} = product;

  const removeProduct = (id) => {
    fetch(` http://localhost:5000/product/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
          toast('Product has been removed')
          refetch();  
        }
    })
  }
    
    return (
       
             <tr className='font-semibold'>
        <th>{index+1}</th>
        <th><img src={img} className="w-[50px]" alt="" /></th>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{price}</td>
        <td><button onClick={()=> removeProduct(_id)} className='btn btn-sm bg-red-600 text-white border-0'> Remove</button></td>
      </tr>
    );
};

export default ProductRow;