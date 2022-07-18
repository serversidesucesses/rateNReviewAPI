import React, { useState, useEffect } from 'react';
import { SearchBar } from '../Styles/Q&A/container.styled';

export default function Search({ setSearch, allQuestions }) {
  const [value, setValue] = useState('');

  function filter(searchWord) {
    if (searchWord.length > 2) {
      const searchArr = allQuestions.filter((q) => (
        q.question_body.toLowerCase().includes(searchWord.toLowerCase())));
      console.log('searchword', searchWord);
      console.log('searchArr', searchArr);
      setSearch(searchArr);
    } else {
      console.log('empty array');
      // setResetCount((prevCount) => prevCount + 1);
      setSearch([]);
    }
  }

  useEffect(() => {
    filter(value);
  }, [value]);

  function changeHandler(e) {
    setValue(e.target.value);
    console.log('hello');
  }

  return (
    <div>
      <SearchBar type="search" max-length="150" autoComplete="off" value={value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={changeHandler} />
      {/* <button onClick={clickHandler}><i>Search</i></button> */}
    </div>
  );
}
