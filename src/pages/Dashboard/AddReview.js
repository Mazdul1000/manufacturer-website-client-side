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
        
        fetch(' https://agri-tools.herokuapp.com/review', {
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
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='bg-primary w-full py-5'>
                    <h1 className="text-3xl font-bold text-white text-center">
                        Write a Review
                    </h1>
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter you email" className="input input-bordered w-full max-w-xs" value={name} readOnly disabled />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <select className='select select-bordered w-full max-w-xs' {...register("productName", { required: true })}>
                                <option value="Hammer">Hammer</option>
                                <option value=" Tools"> Tools</option>
                                <option value=" Shovel"> Shovel</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <textarea className="textarea textarea-bordered resize-none h-[100px]" placeholder="Write your review" {...register("comment", {required: true, maxLength: 150})}></textarea>
                        </div>

                        <div className='flex justify-center mt-2'>
                            <input className='btn w-2/3 btn-primary text-white' type="submit" value='Submit' />
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