import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {name, email, role } = user;
    const makeAdmin = () => {
        fetch(` http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Operation Failed')
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('User has been promoted to admin!')
                }
            })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm btn-primary'> Make Admin</button>}</td>
      </tr>
    );
};

export default UserRow;