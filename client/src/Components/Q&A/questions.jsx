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
  const [count, setCount] = useState(3);
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
  }, [count]);

  useEffect(() => {
    console.log('search Effect');
    setQuestions(search);
  }, [search]);

  function fetchHelpfulData(question_id) {
    axios.put(`/questions/questions/helpful/?question_id=${question_id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  }

  function filter(searchWord) {
    if (searchWord === undefined || '') {
      setCount(2);
      setSearch([]);
    } else {
      const searchArr = allQuestions.filter((q) => (
        q.question_body.toLowerCase().includes(searchWord.toLowerCase())));
      console.log(searchArr);
      setSearch(searchArr);
    }
  }
console.log('debugger');
console.log('questions', questions);
  return (
    <>
      <Search onSearch={filter} />
      <Question_Answer>
        { (questions === undefined || questions.length === 0)
          ? null
          : questions.map((question) => (
           <QuestionList key={question.question_id} helpfulness={fetchHelpfulData} question={question} />)) }
        {(datalength > count || questions.length > 4)
          ? <MoreAnswer type="button" onClick={() => setCount((prevCount) => prevCount + 2)}>MORE ANSWERED QUESTIONS</MoreAnswer>
          : null }
      </Question_Answer>
    </>
  );
}
