import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SortView from './subcomponents/sortview.jsx';
import ReviewList from './subcomponents/reviewslist.jsx';
import RatingBreakdown from './subcomponents/ratingbreakdown.jsx';

export default function ReviewMain({ product_id }) {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [count, setCount] = useState(2);

  const [overallRating, setOverallRating] = useState(0);
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  const [numReviews, setNumReviews] = useState(0);

  const [currentFilters, setCurrentFilters] = useState({});

  const loadMoreReviews = () => {
    setCount((prevCount) => prevCount + 2);
  };

  const getAverageRating = (ratingsObj) => {
    let total = 0;
    let numRatings = 0;
    for (let i = 1; i < 6; i++) {
      total += (Number(ratingsObj[i]) * i);
      numRatings += Number(ratingsObj[i]);
    }
    const rounded = Math.round((total / numRatings) / 0.25) * 0.25;

    return [rounded, numRatings];
  };

  useEffect(() => {
    axios.get('/reviews/reviews/meta', {
      params: {
        product_id,
      },
    })
      .then(({ data }) => {
        const roundedRating = getAverageRating(data.ratings)[0];
        const reviewCount = getAverageRating(data.ratings)[1];
        ReactDOM.unstable_batchedUpdates(() => {
          setOverallRating(roundedRating.toFixed(2));
          setRecommended(data.recommended);
          setCharacteristics(data.characteristics);
          setNumReviews(reviewCount);
          setRatings(data.ratings);
        });
        return axios.get('/reviews/reviews', {
          params: {
            product_id,
            sort: sortOption,
            count: reviewCount,
          },
        });
      })
      .then(({ data }) => {
        setReviews(data.results);

        // setDidMount(true);
      })
      .catch((err) => console.log(err));
  }, [sortOption, setReviews]);

  const selectHandler = (event) => {
    setSortOption(event.target.value);
    setCount(2);
  };

  const filterReviews = () => (
    reviews.filter((item) => {
      if (currentFilters.hasOwnProperty(item.rating)) {
        return true;
      }
      return false;
    })
  );

  const addFilter = (rating) => {
    if (!(rating in currentFilters)) {
      setCurrentFilters((prevState) => ({
        ...prevState,
        [rating]: rating,
      }));
    }
  };

  const deleteFilter = (rating) => {
    if (rating in currentFilters) {
      const filters = { ...currentFilters };
      delete filters[rating];
      setCurrentFilters(filters);
    }
  };

  return (
    <div>
      <SortView selectHandler={selectHandler} reviewCount={reviews.length} />
      <RatingBreakdown
        ratings={ratings}
        overallRating={overallRating}
        recommended={recommended}
        characteristics={characteristics}
        reviewCount={numReviews}
        addFilter={addFilter}
        deleteFilter={deleteFilter}
      />
      <ReviewList
        reviews={Object.keys(currentFilters).length === 0
          ? reviews.slice(0, count)
          : filterReviews().slice(0, count)}
      />

      <button type="button" onClick={loadMoreReviews}>More Reviews</button>
      <button>Add a Review</button>
    </div>
  );
}

