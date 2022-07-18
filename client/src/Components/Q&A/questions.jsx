/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionList from './questionList.jsx';
import Search from './searchBar.jsx';
import QuestionForm from './questionform.jsx';
import { Question_Answer } from '../styles/Q&A/container.styled';
import { MoreAnswer } from '../styles/Q&A/buttons.styled';

const axios = require('axios');

export default function QuestionListContainer() {
  //  useEffect componentDidMount() --> get the data for questions and answers
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [search, setSearch] = useState([]);
  const [count, setCount] = useState(4);
  const [datalength, setDataLength] = useState(2);
  const [addQuestion, setAddQStatus] = useState(false);

  const product_id = 40348; // --------product id need to standardize with all other components---

  function fetchData() {
    axios.get('/questions/questions', {
      params: {
        product_id,
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
    //console.log('count Effect');
    fetchData();
  }, [count]);

  useEffect(() => {
   // console.log('search Effect');
    setQuestions(search);
  }, [search]);

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
        alert('Question has been reported successfully');
      })
      .catch((error) => console.log(error));
  }

  let question = null;

  if (search.length === 0 && questions !== undefined) {
    question = questions.map((question) => (
      // eslint-disable-next-line max-len
      <QuestionList key={question.question_id} helpfulness={fetchHelpfulData} reportQ={reportQ} question={question} />));
  } else {
    question = search.map((question) => (
      // eslint-disable-next-line max-len
      <QuestionList key={question.question_id} helpfulness={fetchHelpfulData} reportQ={reportQ} question={question} />));
  }

  console.log('question:', question);
  console.log('search:', search);
  return (
    <Question_Answer>
      <Search setSearch={setSearch} allQuestions={allQuestions} />

      {question}
      <div>
        {(search.length === 0) && (datalength > count || questions.length > 4)
          ? (
            <MoreAnswer type="button" onClick={() => setCount((prevCount) => prevCount + 2)}>
              SEE
              { ` (${datalength - count})` }
              {' '}
              MORE ANSWERED QUESTIONS
            </MoreAnswer>
          )
          : null }
        <button type="button" onClick={() => setAddQStatus(true)}>ADD A QUESTION  +</button>
        {addQuestion ? <QuestionForm product_id={product_id}  setAddStatus={setAddQStatus}/>
          : null }
      </div>
    </Question_Answer>
  );
}
