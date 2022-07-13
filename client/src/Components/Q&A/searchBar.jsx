import React, { useState } from 'react';

export default function Search(props) {
  const [value, setValue] = useState('');

  function changeHandler(e) {
    setValue(e.target.value);
  }
  function clickHandler() {
    props.onSearch(value);
  }

  return (
    <div>
      <input type="search" max-length="150" autoComplete="off" value={value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={changeHandler} />
      <button onClick={clickHandler}><i>Search</i></button>
    </div>
  );
}
