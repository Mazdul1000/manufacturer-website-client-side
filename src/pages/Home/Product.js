import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate();
    const {name, price, img, description, _id} = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Price: {price}</p>
    <p>{description}</p>
    <div className="card-actions">
      <button onClick={() => navigate(`/placeorder/${_id}`)} className="btn btn-primary">Place Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;