import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import ProductRow from './ProductRow';
import UserRow from './UserRow';

const ManageProducts = () => {
    const navigate = useNavigate();
    const { data: products, refetch, isLoading } = useQuery('products', () => fetch(' https://agri-tools.herokuapp.com/products').then(res => {
        
         if(res.status === 403){
             return navigate('/')           
         }
       return res.json()
        }));

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <h1 className="text-4xl">Manage Products</h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price(per unit)</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow key={product._id} index={index} product={product} refetch={refetch}></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageProducts;