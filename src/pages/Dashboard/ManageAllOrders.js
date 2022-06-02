import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrders = () => {
    const navigate = useNavigate();
    const { data: orders, refetch, isLoading } = useQuery('orders', () => fetch(' https://agri-tools.herokuapp.com/orders',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        
         if(res.status === 403){
             return navigate('/')           
         }
       return res.json()
        }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (

            <div>
            <h1 className="text-4xl text-primary text-center font-bold my-7">Manage Orders</h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Total Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow key={order._id} index={index} order={order} refetch={refetch}></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageAllOrders;