import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './stars.jsx';
import StarList from './starlist.jsx';
import {RatingBreakdownStyled} from '../../Styles/Reviews/bars.styled.js';
import CharacteristicList from './characteristiclist.jsx';

export default function RatingBreakdown({ ratings, recommended, characteristics, reviewCount, overallRating, addFilter, deleteFilter }) {
  const percentages = Object.keys(ratings).map((key) => [Number(key), (Number(ratings[key]) / reviewCount).toFixed(2) * 100]).reverse();

  const rating = (Math.round(overallRating * 10) / 10);
  const recommendPercent = ((recommended.true / (reviewCount)) * 100).toFixed();

  let newCharacteristic = [];

  newCharacteristic = Object.keys(characteristics).map((key) => {
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
      default:
        break;
    }

    return ({
      name: key,
      id: characteristics[key].id,
      percent: ((characteristics[key].value / 5) * 100).toFixed(),
      descriptionOne,
      descriptionTwo,
    });
  });

  return (
    <RatingBreakdownStyled>
      <h2>{rating}</h2>
      <span><Stars rating={overallRating} review_id={40344} /></span>
      <p>{`${recommendPercent}% of reviews recommend this product`}</p>
      <StarList percentages={percentages} addFilter={addFilter} deleteFilter={deleteFilter} ratings={ratings} />

      <CharacteristicList newCharacteristic={newCharacteristic} />
    </RatingBreakdownStyled>
  );
}
