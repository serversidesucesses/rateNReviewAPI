/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import AnswerContainer from './answerContainer.jsx';
import { Button, ButtonContainer } from '../styles/Q&A/buttons.styled';
import { Question, Span, More_Answer, Div, A, Q } from '../styles/Q&A/container.styled';

const axios = require('axios');

export default function QuestionContainer({ question, helpfulness }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [allAnswers, setStatus] = useState(false);

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
  }, [count]);
  // only sort two

  function fetchHelpfulData(answer_id) {
    axios.put(`/questions/answers/helpful/?answer_id=${answer_id}`)
      .then(() => {
        fetchAnswerData();
      })
      .catch((error) => console.log(error));
  }

  function onClick() {
    allAnswers ? setCount(2)  : setCount(1000) ;
    allAnswers ? setStatus(false) : setStatus(true);
  }
  return (
    <div>
      <Question>
        <Q>
          <span>Q: </span>
          <p>{question.question_body}</p>
        </Q>
        <ButtonContainer>
          <div>
            <Button type="button" onClick={(() => helpfulness(question.question_id))}>Helpful?</Button>
            <Span>{`Yes (${question.question_helpfulness})`}</Span>
          </div>
          <Span>|</Span>
          <Button type="button">Add Answer</Button>
        </ButtonContainer>
      </Question>

      <Div>
        <A>A: </A>
        { allAnswers
          ? <More_Answer>
            { answers.map((answer) => <AnswerContainer helpfulness={fetchHelpfulData} answer={answer} />)}
          </More_Answer>

          : <div>{
            answers.map((answer) => <AnswerContainer helpfulness={fetchHelpfulData} answer={answer} />)} </div> }
      </Div>

      {(allAnswers && answers.length > 1)
        ? <Button type="button" onClick={() => onClick()}>Collapse</Button>
        : null }

      {(!allAnswers && answers.length > 1) ? <Button type="button" onClick={() => onClick()}>SEE MORE ANSWERS</Button> : null}

    </div>
  );
}
