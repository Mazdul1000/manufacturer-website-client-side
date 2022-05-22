import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import googleIcon from '../../assets/icons/google.svg'
import LoadingSpinner from '../Shared/LoadingSpinner';
import useToken from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const [token] = useToken(user || googleUser)

     if (loading || updating || googleLoading) {
        return <LoadingSpinner></LoadingSpinner>
      } 

      let signInError; 
      if (error || updateError ||googleError) {
         signInError = <p className='text-red-600 font-bold'><small>Error: {error?.message || updateError?.message || googleError?.message}</small></p>        
      }
    
      

      
      if (token) {
        navigate('/');
      }
    


    const onSubmit = async data => {
        const displayName = data.name;
        const email = data.email;
        const password = data.password;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName, })
    };
    return (
             <div className='min-h-[80vh] py-3 flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl px-3 md:px-0">
                <div className='bg-primary w-full py-5'>
                    <h1 className="text-3xl font-bold text-white text-center">
                        Log In
                    </h1>
                </div>
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Enter you name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600 font-bold">Name is Required!</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter you email" class="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600 font-bold">Email is Required!</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600 font-bold">Password required!</span>}
                            </label>
                        </div>
                        {signInError}
                       <div className='flex justify-center'>
                           <input className='btn w-1/2 btn-sm btn-primary text-white' type="submit" value='Login' />
                       </div>
                        
                    </form>
                    <div>
                        <div className='flex flex-col items-center justify-center'>
                            <div class="divider w-80">OR</div>
                            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary justify-center font-bold">
                               <img src={googleIcon} className="w-[25px] mr-1" alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;