/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionContainer from './questionContainer.jsx';
import {Question_Answer} from '../styles/Q&A/container.styled';

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

  function fetchHelpfulData(question_id) {
    console.log(question_id);
    axios.put(`/questions/questions/helpful/?question_id=${question_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  }

  console.log(questions, count);

  return (
    <Question_Answer>
      { (questions === undefined || questions.length === 0)
        ? null
       : questions.map((question) => <QuestionContainer helpfulness={fetchHelpfulData} question={question} />) }

      {datalength > count || questions.length === 0
        ? <button type="button" onClick={() => setCount((prevCount) => prevCount + 2)}>MORE ANSWERED QUESTIONS</button>
        : null }
    </Question_Answer>
  );
}
