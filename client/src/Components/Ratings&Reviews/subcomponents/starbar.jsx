import React, { useState } from 'react';

import { BarStyled, BarContainerStyled, StarSpanStyled } from '../../Styles/Reviews/bars.styled';

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
      <BarContainerStyled onClick={toggleFilter}>
        <StarSpanStyled>{star} star</StarSpanStyled>
        <BarStyled>
          <div style={{ width: `${percentage}%`, borderRadius: '10px;' }} className={filterActive ? 'percentagefill-opened' : 'percentagefill'} />
        </BarStyled>
        <span>{`${numStars} votes`}</span>
      </BarContainerStyled>
    </div>
  );
}
