import React from 'react';
import StarIcon from './star.jsx';

export default function StarRating({ review_id, rating }) {
  const quarterRating = (Math.round(((rating % 1) * 100) / 25) * 25);
  const numFullStars = rating - (quarterRating / 100);
  const starRating = [...Array(5)].map((icon, index) => {
    let star = null;
    if (index <= numFullStars - 1) {
      star = <StarIcon percent={100} key={`${review_id}_${index}`} index={`${review_id}_${index}`} />;
    } else if (index === numFullStars) {
      star = <StarIcon percent={quarterRating} key={`${review_id}_${index}`} index={`${review_id}_${index}`} />;
    } else {
      star = <StarIcon percent={0} key={`${review_id}_${index}`} index={`${review_id}_${index}`} />;
    }
    return star;
  });

  return (
    <div>
      {starRating}
    </div>
  );
}
