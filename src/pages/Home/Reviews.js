import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='px-12 mt-28'>
            <h1 className="text-4xl mb-3 text-center text-primary font-bold">Customer Reviews</h1>
            <Carousel
            className='gap-5' 
            responsive={responsive}
            infinite={true}
            >
{reviews.map(review => <Review key={review.id} review={review}></Review>)}
</Carousel>;
        </div>
    );
};

export default Reviews;