import React from 'react';

const ManageOrderRow = ({order, index, refetch}) => {
    const {name, price,productName,phone,address, _id,quantity, email} = order;

      
    return (
        <tr className='font-semibold'>
        <th>{index+1}</th>
        <th>{_id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>{productName}</td>
        <td>${quantity*price}</td>
      </tr>
    );
};

export default ManageOrderRow;