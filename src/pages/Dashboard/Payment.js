import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L5TNBJV4ikMyW70NTwvEACTUS8WouY4WfcdvSgSkdpsIlI2V8BJTCDhUAiIihoXdF4PJP8JrJsKj6Yvde2TuPHv00sRtY1cjZ');

const Payment = () => {
    const {orderId} = useParams();

    const {data:order, isLoading} = useQuery('order', ()=> fetch(`http://localhost:5000/order/${orderId}`, {
        method:'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    // const { data:order, isLoading } = useQuery('order', () => fetch(`http://localhost:5000/order/${orderId}`).then(res => res.json()));

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    const {productName} = order;
    return (
        <div className='flex flex-col items-center min-h-screen justify-center'>
            <h2 className="text-2xl text-primary">Please pay for : {productName}</h2>
      
            <div class="card w-1/2 bg-base-300 text-[#090909]">
  <div class="card-body">
    <h2 class="card-title">Pay with card</h2>
    
   <Elements stripe={stripePromise}>
<CheckoutForm />
</Elements> 
  </div>
</div>

 </div>
    );
};

export default Payment;