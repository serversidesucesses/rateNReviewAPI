import React from 'react';

export default function SortBar({ selectHandler, reviewCount }) {
  return (
    <div>
      <label>
        <b>
          {reviewCount}
          {' '}
          reviews
        </b>
        , sorted by
        {' '}
      </label>
      <select name="sort-select" id="sort-select" onChange={selectHandler}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}
