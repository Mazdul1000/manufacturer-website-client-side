import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { StarIcon } from '@heroicons/react/solid'
import googleIcon from '../../assets/icons/google.svg'

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth);
    const name = user?.displayName;
    const img = user?.photoURL;
    

    const onSubmit = data => {
         
        const review ={
            name: name,
            avatar:img,
            message: data.comment,
            productName: data.productName
        }
        
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(review)
      
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };
    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div className='bg-primary w-full py-5'>
                    <h1 className="text-3xl font-bold text-white text-center">
                        Write a Review
                    </h1>
                </div>
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter you email" class="input input-bordered w-full max-w-xs" value={name} readOnly disabled />
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <select className='select select-bordered w-full max-w-xs' {...register("productName", { required: true })}>
                                <option value="Hammer">Hammer</option>
                                <option value=" Tools"> Tools</option>
                                <option value=" Shovel"> Shovel</option>
                            </select>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Comment</span>
                            </label>
                            <textarea class="textarea textarea-bordered" placeholder="Write your review" {...register("comment", {required: true, maxLength: 150})}></textarea>
                        </div>

                        <div className='flex justify-center'>
                            <input className='btn w-1/2 btn-sm btn-primary text-white' type="submit" value='Login' />
                        </div>
                    </form>
                    
                  
                    <div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;