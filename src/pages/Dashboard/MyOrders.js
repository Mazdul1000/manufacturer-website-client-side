
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DeleteConfirm from './DeleteConfirm';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [order, setOrder] = useState(null);
            const { data:orders,refetch, isLoading } = useQuery('orders', () => fetch(` https://agri-tools.herokuapp.com/order?email=${user?.email}`,{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

if(loading || isLoading){
    return <LoadingSpinner></LoadingSpinner>
}

    return (
        <div>
            <h1 className="text-5xl text-primary font-semibold font-mono my-5 text-center">My Orders</h1>

            {orders.length < 1  && <h1 className="text-4xl font-bold font-mono text-center"> You have no orders</h1>}
            <div className="grid grid-cols-1 overflow-hidden gap-10">
                {
                    orders.map(order => <OrderRow key={order._id} order={order} refetch={refetch} setOrder={setOrder}></OrderRow>)
                }
            </div>

            <DeleteConfirm order={order} setOrder={setOrder} orderRefetch={refetch}></DeleteConfirm>

            
        </div>
    );
};

export default MyOrders;