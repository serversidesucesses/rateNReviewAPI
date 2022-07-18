import React from 'react';
import Review from './review.jsx';

export default function ReviewsList({ reviews, loadMoreReviews }) {
  return (
    <div>
      {reviews.map((review) => <Review key={review.review_id} review={review} />)}
      <button type="button" onClick={loadMoreReviews}>More Reviews</button>
      <button>Add a Review</button>
    </div>
  );
}
