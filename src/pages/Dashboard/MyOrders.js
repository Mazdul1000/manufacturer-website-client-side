import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ConfirmModal from './ConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orderData, setOrderData] = useState(null);
    
            const { data:orders,refetch, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/order?email=${user?.email}`,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(orders);
if(loading || isLoading){
    return <LoadingSpinner></LoadingSpinner>
}

    return (
        <div>
            <h1 className="text-5xl text-primary font-semibold font-mono my-5 text-center">My Orders</h1>

            <div className="grid grid-cols-1 overflow-hidden gap-10">
                {
                    orders.map(order => <OrderRow key={order._id} order={order} setIsConfirm={setOrderData}></OrderRow>)
                }
            </div>
            
        </div>
    );
};

export default MyOrders;