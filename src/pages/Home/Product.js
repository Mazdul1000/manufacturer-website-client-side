import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate();
    const {name, price, img, description, _id} = product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>Price: {price}</p>
    <p>{description}</p>
    <div class="card-actions">
      <button onClick={() => navigate(`/placeorder/${_id}`)} class="btn btn-primary">Place Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;