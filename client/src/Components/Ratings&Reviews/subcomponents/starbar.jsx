import React, { useState } from 'react';

import { Bar, BarContainer, StarSpan } from '../../Styles/Reviews/bars.styled';

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
        <StarSpan>{star} star</StarSpan>
        <Bar>
          <div style={{ width: `${percentage}%` }} className={filterActive ? 'percentagefill-opened' : 'percentagefill'} />
        </Bar>
        <StarSpan><span>{`${numStars} votes`}</span></StarSpan>
      </BarContainer>
    </div>
  );
}
