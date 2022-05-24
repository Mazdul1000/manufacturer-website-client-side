import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch(' https://agri-tools.herokuapp.com/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='my-28'>
            <h1 className='text-4xl text-center text-primary font-bold'> Our Products</h1>
            <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            
        </div>
    );
};

export default Products;