import React from 'react';
import StarIcon from './star.jsx';

export default function StarRating({ review_id, rating }) {
  const quarterRating = (rating % 1) * 100;
  const numFullStars = rating - quarterRating;
  const starRating = [...Array(5)].map((icon, index) => {
    let star = null;
    if (index <= numFullStars - 1) {
      star = <StarIcon percent={100} index={`${review_id}_${index}`} />;
    } else if (index === numFullStars) {
      star = <StarIcon percent={quarterRating} index={`${review_id}_${index}`} />;
    } else {
      star = <StarIcon percent={0} index={`${review_id}_${index}`} />;
    }
    return star;
  });

  return (
    <div>
      {starRating}
    </div>
  );
}
