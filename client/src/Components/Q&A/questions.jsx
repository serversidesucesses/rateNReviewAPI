/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionContainer from './questionContainer.jsx';

const axios = require('axios');

export default function QuestionList() {
  //  useEffect componentDidMount() --> get the data for questions and answers
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(2);
  const [datalength, setDataLength] = useState(2);

  function fetchData() {
    axios.get('/questions/questions', {
      params: {
        product_id: 40348,
        page: 1,
      },
    })
      .then(({ data }) => {
        setDataLength(data.length);
        setQuestions(data.slice(0, count));
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(datalength, count);

  return (
    <div>
      { (questions === undefined || questions.length === 0)
        ? null : questions.map((question) => <QuestionContainer question={question} />) }
      {datalength > count
        ? <button type="button" onClick={() => setCount((prevCount) => prevCount + 2)}>MORE ANSWERED QUESTIONS</button>
        : null }
    </div>
  );
}
