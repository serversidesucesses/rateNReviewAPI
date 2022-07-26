import React, { useState, useEffect } from 'react';
import StarIcon from '../staricon.jsx';

export default function FormStarButton({ onChange }) {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    console.log('formstarbutton')
    onChange(rating);
  }, [rating]);

  const handleClick = (event) => {
    setRating(event.target.getAttribute('data-star-id'));
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      {[...Array(5)].map((icon, index) => (
        <StarIcon
          percent={rating >= index + 1 ? '100' : '0'}
          index={`StarButton_${index}`}
          starId={index + 1}
          key={`StarButton_${index}`}
        />
      ))}
    </div>
  );
}
