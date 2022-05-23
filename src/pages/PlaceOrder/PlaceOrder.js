import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

    const navigate = useNavigate();
    const { productId } = useParams();
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: product, isLoading } = useQuery('product', () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()));
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const { name, price, description, minOrder, stock, img } = product;
    const onSubmit = async data => {
       const order = {
           name: user?.displayName,
           email: user?.email,
           productName:name,
           quantity:data.quantity,
           phone: data.phone,
           address: data.address,
           img:img,
           price: price
       }

       fetch('http://localhost:5000/order',{
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data => {
           if(data.insertedId){
               toast.success("Your order has been placed. You may proceed to payment" );
               navigate('/dashboard/myorders')
           }
       })
    };

    return (
        <div className=' '>
            <div class="grid grid-cols-1 md:grid-cols-3 ">

                <div class="col-span-2">
                    <div className="hero">
                        <div className="hero-content flex-col min-h-screen bg-accent lg:flex-row">
                            <img className='lg:max-w-[458px] w-1/2 rounded-lg shadow-2xl' src={img} alt='' />
                            <div className='md:px-10'>
                                <h1 className="text-3xl font-bold">Product Name: {name}</h1>
                                <p className='text-xl font-semibold my-2'>Price per unit: ${price}</p>
                                <p className='text-xl font-semibold my-2'>Stock: {stock}</p>
                                <p className='text-xl font-semibold my-2'>Minimum Order: {minOrder}</p>
                                <p className="py-6">{description}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered input-primary" value={user?.displayName} disabled readOnly />
                                <label class="label">
                                </label>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered input-primary" value={user?.email} disabled readOnly />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" name='phone' placeholder="phone" class="input input-bordered input-primary" {...register("phone", {
                  required: {
                    value: true,
                    message: 'Username is Required'
                  },
                  pattern: {
                    value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                    message: 'Enter a valid number with +880'
                  }

                })} />
                <label>{errors.phone?.type === 'pattern' && <span class="label-text-alt text-red-600 font-bold">{errors.phone.message}</span>}</label>
                       </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" class="input input-bordered input-primary" {...register("address", { required: true })} />

                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input type="number" name='quantity' class="input input-bordered input-primary" placeholder={minOrder} {...register("quantity", { required: true, max: { stock }, min: { minOrder } })} value={minOrder} />
                                <label class="label">
                                    {errors.quantity?.type === 'min' && <span class="label-text-alt text-red-600 font-bold">You must fulfill the minimum order</span>}
                                    {errors.quantity?.type === 'max' && <span class="label-text-alt text-red-600 font-bold">Out of Stock</span>}
                                </label>
                            </div>

                            <div className='flex justify-center form-control mt-3'>
                                <input className='btn w-1/2 btn-sm btn-primary text-white' type="submit" value='Place Order' />
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default PlaceOrder;