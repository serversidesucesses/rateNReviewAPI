import React from 'react';
import Review from './review.jsx';

export default function ReviewsList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => <Review review={review} />)}
    </div>
  );
}
