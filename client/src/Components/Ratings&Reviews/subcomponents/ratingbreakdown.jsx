import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from './stars.jsx';
import StarBar from  './starbar.jsx';
import CharacteristicBar from './characteristicbar.jsx';

export default function RatingBreakdown({ ratings, recommended, characteristics, reviewCount, overallRating, addFilter, deleteFilter }) {
  const percentages = Object.keys(ratings).map((key) => [Number(key), (Number(ratings[key]) / reviewCount).toFixed(2) * 100]).reverse();

  const rating = (Math.round(overallRating * 10) / 10);
  const recommendPercent = ((recommended.true / (reviewCount)) * 100).toFixed();

  const newCharacteristic = Object.keys(characteristics).map((key) => {
    let descriptionOne = '';
    let descriptionTwo = '';

    switch(key) {
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
    <div>
      <h2>{rating}</h2>
      <span><Stars rating={overallRating} review_id={40344} /></span>
      <p>{`${recommendPercent}% of reviews recommend this product`}</p>
      {percentages.map((value, index) => (
        <StarBar
          percentage={value[1]}
          star={value[0]}
          numStars={ratings[value[0]]}
          addFilter={addFilter}
          deleteFilter={deleteFilter}
          key={index}
        />
      ))}
      <div>

      </div>
      {newCharacteristic.map((value) => (
        <CharacteristicBar characteristic={value} key={value.id} />
      ))}
    </div>
  );
}
