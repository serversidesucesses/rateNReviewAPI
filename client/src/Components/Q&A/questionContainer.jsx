/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import AnswerContainer from './answerContainer.jsx';
import { Button, ButtonContainer } from '../styles/Q&A/buttons.styled';
import { Question, Span } from '../styles/Q&A/container.styled';

const axios = require('axios');

export default function QuestionContainer({ question, helpfulness }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [dataLength, setDataLength] = useState(0);
  // fetch all data --> refactor later
  function fetchAllAnswers() {
    axios.get('/questions/answers', {
      params: {
        question_id: question.question_id,
        page: 1,
        count: 1000,
      },
    })
      .then(({ data }) => setDataLength(data.results.length))
      .catch((error) => console.log(error));
  }

  function fetchAnswerData() {
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
    fetchAnswerData();
    fetchAllAnswers();
  }, [count]);
  // only sort two

  function fetchHelpfulData(answer_id) {
    axios.put(`/questions/answers/helpful/?answer_id=${answer_id}`)
      .then(() => {
        fetchAnswerData();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Question>
        <p>{`Q: ${question.question_body}`}</p>
        <ButtonContainer>
          <Button type="button" onClick={(() => helpfulness(question.question_id))}>Helpful?</Button>
          <Span>{`Yes (${question.question_helpfulness})`}</Span>
          <Span>|</Span>
          <Button type="button">Add Answer</Button>
        </ButtonContainer>
      </Question>
      <div>
        {
        answers.map((answer) => <AnswerContainer helpfulness={fetchHelpfulData} answer={answer} />)
        }
      </div>
      { dataLength >= count
        ? <div onClick={() => setCount((prevCount) => prevCount + 2)}>LOAD MORE ANSWERS</div>
        : null }

    </div>
  );
}
