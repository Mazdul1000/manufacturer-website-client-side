import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import blankAvatar from '../../assets/image/blank_image.jpg'
import { toast } from 'react-toastify';
import linkedIcon from '../../assets/icons/linkedin.svg';
import facebookIcon from '../../assets/icons/facebook.svg'


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [openModal , setOpenModal] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);

    const { data: userData, refetch, isLoading } = useQuery('userData', () => fetch(` https://agri-tools.herokuapp.com/user?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (loading || isLoading || updateLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const name = user?.displayName;
    const { email, avatar, phone, address , linkedIn, facebook } = userData[0];

    const handleUpadate = e => {
     e.preventDefault();
        const userInfo ={

            address: e.target.address.value,
            phone: e.target.phone.value,
            linkedIn: e.target.linkedIn.value,
            facebook: e.target.facebook.value
        }

        fetch(` https://agri-tools.herokuapp.com/user/profile/${email}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
             toast.success('Profile Updated')
             refetch();
             setOpenModal(false);
            
            }
        })

    }

  
    return (
        <div>
            <h1 className="text-4xl text-primary font-bold text-center my-5">My Profile</h1>
            <div className="card lg:card-side lg:pl-48 bg-base-100 shadow-xl p-10">
                <figure><img src={avatar || blankAvatar} className="w-[300px] shadow-lg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name: {name}</h2>
                    <p className='text-xl font-semibold'>Email: {email}</p>
                    <p className='text-xl font-semibold'>Phone: {phone || "N/A"}</p>
                    <p className='text-xl font-semibold'>Address: {address || "N/A"}</p>
                    <p className='font-bold font-mono'>Social Media Links:</p>
                    {!facebook && !linkedIn && <p className='font-semi-bold'>Add your social media Link</p>}
                    <div className="flex">{facebook && <a href={facebook}><span><img src={facebookIcon} alt="" /></span> </a>}
                    {linkedIn && <a href={linkedIn}><span><img src={linkedIcon} alt="" /></span> </a>}</div>
                    <div className="card-actions justify-start">
                        <label  htmlFor="update-profile-modal" onClick={()=> setOpenModal(true)} className="btn modal-button btn-primary text-white">Update Profile</label>
                    </div>
                </div>
            </div>

            {/* Update Profile Modal */}
         {openModal&& <div >
                 <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="update-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleUpadate} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' value={user?.displayName || ' '} className="input input-bordered w-full max-w-xs" readOnly disabled />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' value={user?.email || ' '} className="input input-bordered w-full max-w-xs" disabled readOnly />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Linked in profile link</span>
                            </label>
                            <input type="text" name='linkedIn' placeholder="Enter Link" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Facebook Profile Link</span>
                            </label>
                            <input type="text" name='facebook' placeholder="Enter Link" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" value='Submit' className="btn btn-primary text-white border-none w-full max-w-xs" />

                    </form>
                </div>
            </div>

         </div>}
        
        </div>
    );
};

export default MyProfile;