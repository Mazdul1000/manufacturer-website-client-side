import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { StarIcon } from '@heroicons/react/solid'
import googleIcon from '../../assets/icons/google.svg'
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading] = useAuthState(auth);
    const name = user?.displayName;
    const img = user?.photoURL;
    const navigate= useNavigate();


    const onSubmit = data => {

        const review = {
            name: name,
            avatar: img,
            message: data.comment,
            rating: data.rating
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
                if(data.insertedId){
                    toast('Thank you. Your review has been added');
                    navigate('/');
                }
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
                                <span className="label-text">Rating (1 to 5)</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" name='rating' type="number"  {...register("rating", { required: true, max: 5, min: 1 })} />
                            <label htmlFor="rating">
                                {errors.rating?.type === 'max' && <span className="label-text-alt text-red-600 font-bold">Please give rating between 1 to 5</span>}
                                {errors.rating?.type === 'min' && <span className="label-text-alt text-red-600 font-bold">Please give rating between 1 to 5</span>}
                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <textarea className="textarea textarea-bordered resize-none h-[100px]" placeholder="Write your review" {...register("comment", { required: true, maxLength: 150 })}></textarea>
                            <label className="label">
                                {errors.comment?.type === 'maxLength' && <span className="label-text-alt text-red-600 font-bold">Please write withing 150 words</span>}
                            </label>
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