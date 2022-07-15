import React, { useState } from 'react';
import { SearchBar } from '../styles/Q&A/container.styled';

export default function Search({ onSearch, setCount, count }) {
  const [value, setValue] = useState('');

  function changeHandler(e) {
    setValue(e.target.value);
    console.log('hello');
      onSearch(value);
  }
  // function clickHandler() {
  //   props.onSearch(value);
  // }

  return (
    <div>
      <SearchBar type="search" max-length="150" autoComplete="off" value={value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={changeHandler} />
      {/* <button onClick={clickHandler}><i>Search</i></button> */}
    </div>
  );
}
