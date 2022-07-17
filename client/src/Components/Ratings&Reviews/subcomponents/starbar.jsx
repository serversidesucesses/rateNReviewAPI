import React, { useState } from 'react';

import { Bar, BarContainer } from '../../styles/Reviews/bars.styled';

export default function StarBar({ percentage, star, numStars, addFilter, deleteFilter }) {
  const [filterActive, setFilterActive] = useState(false);

  const toggleFilter = () => {
    setFilterActive(!filterActive);
    if (!filterActive) addFilter(star);
    else {
      deleteFilter(star);
    }
  };

  return (
    <div>
      <BarContainer onClick={toggleFilter}>
        <span>{star} star</span>
        <Bar>
          <div style={{width: `${percentage}%`}} className={filterActive ? 'percentagefill-opened' : 'percentagefill'}>
          </div>
        </Bar>
        <span>{`${numStars} votes`}</span>
      </BarContainer>
    </div>
  );
}
