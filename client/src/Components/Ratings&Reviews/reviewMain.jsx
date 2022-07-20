import React, { useState, useEffect, useContext, memo } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './subcomponents/reviewslist.jsx';
import RatingBreakdown from './subcomponents/ratingbreakdown.jsx';
import { MainGridStyled, ReviewContainer } from '../Styles/Reviews/bars.styled';
import { AppContext } from '../../AppContext.jsx';

function ReviewMain({ product_id }) {
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [count, setCount] = useState(2);

  const [overallRating, setOverallRating] = useState(0);
  const { setRating, setCountRatings } = useContext(AppContext);
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  const [characteristics, setCharacteristics] = useState([]);
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
    setRating(overallRating);
    setCountRatings(numReviews);
  }, [overallRating, numReviews]);

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
          setNumReviews(reviewCount);
          setRatings(data.ratings);
          setCharacteristics(Object.keys(data.characteristics).map((key) => {
            let descriptionOne = '';
            let descriptionTwo = '';

            switch (key) {
              case 'Fit':
                descriptionOne = 'Too small';
                descriptionTwo = 'Too large';
                break;
              case 'Length':
                descriptionOne = 'Runs short';
                descriptionTwo = 'Runs large';
                break;
              case 'Comfort':
                descriptionOne = 'Uncomfortable';
                descriptionTwo = 'Perfect';
                break;
              case 'Quality':
                descriptionOne = 'Poor';
                descriptionTwo = 'Perfect';
                break;
              case 'Size':
                descriptionOne = 'A size too small';
                descriptionTwo = 'A size too wide';
                break;
              case 'Width':
                descriptionOne = 'Too narrow';
                descriptionTwo = 'Too wide';
                break;
              default:
                break;
            }

            return ({
              name: key,
              id: data.characteristics[key].id,
              percent: ((data.characteristics[key].value / 5) * 100).toFixed(),
              descriptionOne,
              descriptionTwo,
            });
          }));
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
      setCount(2);
    }
  };

  const deleteFilter = (rating) => {
    if (rating in currentFilters) {
      const filters = { ...currentFilters };
      delete filters[rating];
      setCurrentFilters(filters);
      setCount(2);
    }
  };

  return (
    <ReviewContainer id="review">
      <MainGridStyled>
        <RatingBreakdown
          ratings={ratings}
          overallRating={overallRating}
          recommended={recommended}
          characteristics={characteristics}
          reviewCount={numReviews}
          addFilter={addFilter}
          deleteFilter={deleteFilter}
          style={{ marginLeft: '-30px' }}
        />
        <ReviewList
          reviews={Object.keys(currentFilters).length === 0
            ? reviews.slice(0, count)
            : filterReviews().slice(0, count)}
          loadMoreReviews={loadMoreReviews}
          style={{ marginRight: '100px' }}
          characteristics={characteristics}
          product_id={product_id}
          selectHandler={selectHandler}
          reviewCount={reviews.length}
        />
      </MainGridStyled>
    </ReviewContainer>
  );
}

export default memo(ReviewMain);
