import React, { useState, useEffect } from 'react';
import { SearchBarStyled } from '../Styles/Q&A/container.styled';

export default function Search({ setSearch, allQuestions }) {
  const [value, setValue] = useState('');

  const filter = (searchWord) => {
    if (searchWord.length > 2) {
      const searchArr = allQuestions.filter((q) => (
        q.question_body.toLowerCase().includes(searchWord.toLowerCase())));
      setSearch(searchArr);
    } else {
      setSearch([]);
    }
  }

  useEffect(() => {
    filter(value);
  }, [value]);

  const changeHandler = (e) => {
    setValue(e.target.value);
    console.log('hello');
  }

  return (
    <div>
      <SearchBarStyled type="search" max-length="150" autoComplete="off" value={value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={changeHandler} />
    </div>
  );
}
