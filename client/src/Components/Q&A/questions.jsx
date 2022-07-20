/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import QuestionList from './questionList.jsx';
import Search from './searchBar.jsx';
import AddQuestion from './Forms/questionform.jsx';
import Modal from './Modal/Modal.jsx';
import { Question_AnswerStyled, SeeMoreQuestionStyled } from '../Styles/Q&A/container.styled';
import { MoreAnswer } from '../Styles/Q&A/buttons.styled';

const axios = require('axios');

export default function QuestionListContainer() {
  //  useEffect componentDidMount() --> get the data for questions and answers
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [search, setSearch] = useState([]);
  const [count, setCount] = useState(4);
  const [datalength, setDataLength] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    fetchData();
  }, []);

  useEffect(() => {
    // console.log('count Effect');
    setQuestions(allQuestions.slice(0, count));
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
      <QuestionList
        key={question.question_id}
        helpfulness={fetchHelpfulData}
        reportQ={reportQ}
        question={question}
      />
    ));
  } else {
    question = search.map((question) => (
      // eslint-disable-next-line max-len
      <QuestionList
        key={question.question_id}
        helpfulness={fetchHelpfulData}
        reportQ={reportQ}
        question={question}
      />
    ));
  }

  console.log('question:', question);
  console.log('search:', search);

  // -------- validator function for Modal ------
  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  // need to validate form and then send to api
  const onFormValidation = (data) => {
    console.log('data', data, 'product_id', product_id);
    const questionData = {...data, product_id}
    axios.post(`/questions/questions/`, questionData)
      .then(() => console.log('successful posting questions'))
      .catch((error) => console.log('failed to post question', error));
    setIsModalOpen(false);
  };

  return (
    <>
      { isModalOpen
        ? (
          <Modal
            title="Ask Your Question"
            description="About the product (Need product Name)"
            isOpen={isModalOpen}
            onCloseRequest={onModalCloseRequest}
          >
            <AddQuestion onFormValidation={onFormValidation} />
          </Modal>
        )
        : null }

          <Question_AnswerStyled>
        <Search setSearch={setSearch} allQuestions={allQuestions} />
        </Question_AnswerStyled>

      <Question_AnswerStyled>

        {question}

      </Question_AnswerStyled>
      <SeeMoreQuestionStyled>
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
        <button type="button" onClick={() => setIsModalOpen(true)}>ADD A QUESTION  +</button>
      </SeeMoreQuestionStyled>

    </>
  );
}
