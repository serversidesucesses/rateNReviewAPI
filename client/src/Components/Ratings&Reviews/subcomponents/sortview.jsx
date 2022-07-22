import React from 'react';
import { SortBarStyled, SelectStyled } from '../../Styles/Reviews/bars.styled.js';

export default function SortBar({ selectHandler, reviewCount }) {
  return (
    <SortBarStyled>
      <label htmlFor="sort-select">
        <h3>
          <b>
            {reviewCount}
            {' '}
            reviews
          </b>
          , sorted by
          {/* {' '} */}
        </h3>
      </label>
      <SelectStyled name="sort-select" id="sort-select" onChange={selectHandler}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </SelectStyled>
    </SortBarStyled>
  );
}
