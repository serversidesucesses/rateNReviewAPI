/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import AnswerContainer from './answerContainer.jsx';

const axios = require('axios');

export default function QuestionContainer({ question }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  let [answers, setAnswers] = useState([]);
  let [count, setCount] = useState(2);

  function fetchData() {
    axios.get('/questions/answers', {
      params: {
        question_id: question.question_id,
        page: 1,
        count,
      },
    })
      .then(({ data }) => setAnswers(data.results))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [count]);
  // only sort two

  return (
    <div>
      <p>{`Q: ${question.question_body}`}</p>
      <div>
        <a href='#'>Helpful?</a>
        <span>Yes ({question.question_helpfulness})</span>
        <span>|</span>
        <a href='#'>Add Answer</a>
      </div>
      <span>A:</span>
      <div>{ answers.map((answer) => <AnswerContainer answer={answer} />) }</div>
      <div onClick={() => setCount(count + 2)}>LOAD MORE ANSWERS</div>
    </div>
  );
}
