import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import googleIcon from '../../assets/icons/google.svg'
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';




const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)
    
  
    useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token, from, navigate])



    if (googleLoading || sending || loading) {
        return <LoadingSpinner></LoadingSpinner>
    } 

    let signInError;
    if (error || resetError || googleError) {
        signInError = <p className='text-red-600 font-bold'><small>Error: {error?.message || resetError?.message || googleError?.message}</small></p>
    }

   

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password)
    };
    const resetPassword = async data => {
        const email = data.email;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='bg-primary w-full py-5'>
                    <h1 className="text-3xl font-bold text-white text-center">
                        Log In
                    </h1>
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter you email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-bold">Email is Required!</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 font-bold">Password required!</span>}
                            </label>
                        </div>
                        {signInError}
                        <p className='text-red-600 font-bold'><small onClick={handleSubmit(resetPassword)} className='cursor-pointer '>Forgot Pasword?</small></p>
                        <div className='flex justify-center'>
                            <input className='btn w-1/2 btn-sm btn-primary text-white' type="submit" value='Login' />
                        </div>
                        <p className='text-center font-semibold'><small>New to Agri-tools? <Link className='text-primary font-bold' to='/signup'>Create a new account.</Link></small></p>
                    </form>
                    <div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="divider w-80">OR</div>
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary justify-center font-bold">
                                <img src={googleIcon} className="w-[25px] mr-1" alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>


            

        </div>

    );
};

export default Login;