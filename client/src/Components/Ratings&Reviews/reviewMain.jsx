import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortView from './subcomponents/sortview.jsx';
import ReviewList from './subcomponents/reviewslist.jsx';

export default function ReviewMain() {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [didMount, setDidMount] = useState(false);
  const [count, setCount] = useState(2);

  const loadMoreReviews = () => {
    setCount((prevCount) => prevCount + 2);
  };

  useEffect(() => {
    axios.get('/reviews/reviews', {
      params: {
        product_id: 40344,
        sort: sortOption,
        count,
      },
    })
      .then(({ data }) => {
        console.log(data);
        setReviews(data.results);
        setDidMount(true);
      })
      .catch((err) => console.log(err));
  }, [sortOption, count]);

  const selectHandler = (event) => {
    setSortOption(event.target.value);
    setCount(2);
  };

  return (
    <div>
      <SortView selectHandler={selectHandler} reviewCount={reviews.length} />
      <ReviewList reviews={reviews} />

      <button type="button" onClick={loadMoreReviews}>More Reviews</button>
      <button>Add a Review</button>
    </div>
  );
};
