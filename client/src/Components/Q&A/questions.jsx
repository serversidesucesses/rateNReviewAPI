/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionList from './questionList.jsx';
import Search from './searchBar.jsx';
import { Question_Answer } from '../styles/Q&A/container.styled';
import { MoreAnswer } from '../styles/Q&A/buttons.styled';

const axios = require('axios');

export default function QuestionListContainer() {
  //  useEffect componentDidMount() --> get the data for questions and answers
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [search, setSearch] = useState([]);
  const [resetCount, setResetCount] = useState(0);
  const [count, setCount] = useState(4);
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
        setAllQuestions(data);
        setQuestions(data.slice(0, count));
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log('count Effect');
    fetchData();
  }, [count, resetCount]);

  useEffect(() => {
    console.log('search Effect');
    setQuestions(search);
    console.log('count setQuestion: ', count);
  }, [search]);

  function filter(searchWord) {
    const searchArr = allQuestions.filter((q) => (
      q.question_body.toLowerCase().includes(searchWord.toLowerCase())));
    console.log(searchArr);
    console.log('filter: ', count);
    if (searchArr.length > 0 && searchWord.length >= 3) {
      setSearch(searchArr);
    } else {
      console.log('empty array');
      setResetCount((prevCount) => prevCount + 1);
    }
  }

  function fetchHelpfulData(question_id) {
    axios.put(`/questions/questions/helpful/?question_id=${question_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  }

  function reportQ(question_id) {
    axios.put(`questions/reportQ/?question_id=${question_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Question_Answer>
      <Search onSearch={filter} setCount={setCount} count={count} />

      { (questions === undefined || questions.length === 0)
        ? null
        : questions.map((question) => (
          // eslint-disable-next-line max-len
          <QuestionList key={question.question_id} helpfulness={fetchHelpfulData} reportQ={reportQ} question={question} />)) }
      {(datalength > count || questions.length > 4)
        ? (
          <MoreAnswer type="button" onClick={() => setResetCount(count)}>
            SEE
            { datalength - count }
            {' '}
            MORE ANSWERED QUESTIONS
          </MoreAnswer>
        )
        : null }
    </Question_Answer>
  );
}
