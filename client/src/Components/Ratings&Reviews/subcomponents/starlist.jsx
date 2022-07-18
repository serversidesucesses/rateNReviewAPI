import React from 'react';
import StarBar from  './starbar.jsx';
import {StarListStyled} from '../../Styles/Reviews/bars.styled.js';

export default function StarList({percentages, addFilter, deleteFilter, ratings}) {
  return (
    <StarListStyled>
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
    </StarListStyled>
  );
}
