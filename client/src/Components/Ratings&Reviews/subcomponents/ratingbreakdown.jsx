/* eslint-disable import/extensions */
import React from 'react';
import Stars from './stars.jsx';
import StarBarList from './starbarlist.jsx';
import { RatingBreakdownStyled, OverallRatingStyled } from '../../Styles/Reviews/bars.styled.js';
import CharacteristicList from './characteristiclist.jsx';

export default function RatingBreakdown({
 ratings,
 recommended,
 characteristics,
 reviewCount,
 overallRating,
 addFilter,
 deleteFilter,
}) {
  const percentages = Object.keys(ratings).map((key) => (
    [Number(key), (Number(ratings[key]) / reviewCount).toFixed(2) * 100])).reverse();

  const rating = (Math.round(overallRating * 10) / 10);
  const recommendPercent = ((recommended.true / (reviewCount)) * 100).toFixed();

  return (
    <RatingBreakdownStyled>
      <h2 style={{marginBottom: '-30px', marginLeft: '50px'}}>Ratings & Reviews</h2>
      <OverallRatingStyled>
        <h2 style={{ fontSize: '50px', marginRight: '15px' }}>{rating}</h2>
        <span style={{ marginTop: '68px' }}><Stars rating={overallRating} review_id={40344} /></span>
      </OverallRatingStyled>
      <p style={{ marginLeft: '40px', marginBottom: '15px', marginTop: '15px' }}>{`${recommendPercent}% of reviews recommend this product`}</p>
      <StarBarList
        percentages={percentages}
        addFilter={addFilter}
        deleteFilter={deleteFilter}
        ratings={ratings}
        style={{marginBottom: '20px'}}
      />
      <CharacteristicList style={{marginTop: '60px'}}characteristics={characteristics} />
    </RatingBreakdownStyled>
  );
}
