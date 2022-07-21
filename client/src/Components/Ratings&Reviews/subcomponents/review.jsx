import React, { useState } from 'react';
import axios from 'axios';
import Star from './stars.jsx';
import {ReviewButtonStyled, SpanStyled, ReviewStyled, SummaryStyled, NameDateStyled, StarStyled, CheckStyled, SmallStyled, BodyStyled } from '../../Styles/Reviews/bars.styled.js';
import check from '../assets/check-mark.png';
import { PhotosContainer } from '../../Styles/Q&A/photo.styled';
import Photo from '../../../Assets/photo.jsx';


const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default function Review({ review }) {
  const reviewDate = new Date(review.date).toLocaleDateString('en-US', options);
  const [helpCount, setHelpCount] = useState(review.helpfulness);
  // const [notClicked, setClick] = useState(true); //One click per user

  const helpHandler = () => {
    axios.put(`/reviews/mark/helpful?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        setHelpCount(helpCount + 1);
        // setDidClick(false);
      })
      .catch((err) => { console.log(err); });
  };

  const reportHandler = () => {
    axios.put(`/reviews/mark/report?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        // setDidClick(false);
      })
      .catch((err) => { console.log(err); });
  };
  return (
    <ReviewStyled>
      <StarStyled>
        <Star rating={review.rating} review_id={review.review_id} styled={{marginTop: '100px'}}/>
        <NameDateStyled>{`${review.reviewer_name},  ${reviewDate}`}</NameDateStyled>
      </StarStyled>
      {review.summary.length > 0
        ? <SummaryStyled>{review.summary.slice(0, 250)}</SummaryStyled>
        : null}

      <BodyStyled>{review.body.slice(0, 250)}</BodyStyled>

      {review.response && <p>{review.response}</p>}
      {review.photos.length === 0
        ? null
        : (
          <PhotosContainer>
            {' '}
            {review.photos.map((photo, index) => <Photo key={index} photos={photo} />)}
            {' '}
          </PhotosContainer>
        )}
      <SmallStyled>
        {review.recommend && (
          <small style={{ marginBottom: '15px', marginTop: '-10px' }}>
            <CheckStyled src={check}/>
            I recommend this product
          </small>
        )}
        <div>
          <SpanStyled>Helpful?</SpanStyled>
          &nbsp;
          <ReviewButtonStyled type="button" onClick={helpHandler}>Yes</ReviewButtonStyled>
          <SpanStyled>{`(${helpCount}) | `}</SpanStyled>
          <ReviewButtonStyled type="button" onClick={reportHandler}>Report</ReviewButtonStyled>
        </div>
      </SmallStyled>
    </ReviewStyled>
  );
}
