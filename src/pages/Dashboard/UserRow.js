import React from 'react';

const UserRow = ({user, index}) => {
    const {name, email} = user;
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td><button className='btn btn-sm btn-primary'> Make Admin</button></td>
      </tr>
    );
};

export default UserRow;