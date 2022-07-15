/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import AnswerList from './answerList.jsx';
import AddAnswer from './addAnswer.jsx';
import { Button, ButtonContainer } from '../styles/Q&A/buttons.styled';
import { Question, Span, More_Answer, AnswerContainer, A, Q, Answer} from '../styles/Q&A/container.styled';

const axios = require('axios');

export default function QuestionList({ question, helpfulness }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [helpfulData, setHelpfulData] = useState(0);
  const [status, setStatus] = useState(false);
  const [add, setAddStatus] = useState(false);

  useEffect(() => {
    axios.get('/questions/answers', {
      params: {
        question_id: question.question_id,
        page: 1,
        count,
      },
    })
      .then(({ data }) => setAnswers(data.results))
      .catch((error) => console.log(error));
  }, [count, helpfulData]);

  // only sort two

  function fetchHelpfulData(answer_id) {
    axios.put(`/questions/answers/helpful/?answer_id=${answer_id}`)
      .then(() => setHelpfulData((prevCount) => prevCount + 1))
      .catch((error) => console.log(error));
  }

  function onClick() {
    status ? setCount(2)  : setCount(1000) ;
    status ? setStatus(false) : setStatus(true);
  }

  console.log("question", question)
  console.log('answersArray', answers);
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
          <Button type="button" onClick={() => setAddStatus(true)}>Add Answer</Button>
          { add ? <AddAnswer setAddStatus={setAddStatus} /> : null }
        </ButtonContainer>
      </Question>

      <AnswerContainer>
        <A>A: </A>
        { status === true
          ? <More_Answer>
            { answers.map((answer) => <AnswerList key={answer.answer_id} helpfulness={fetchHelpfulData} answer={answer} />)}
          </More_Answer>

          : <Answer>{
            answers.map((answer, index) => <AnswerList key={index} helpfulness={fetchHelpfulData} answer={answer} />)} </Answer> }
      </AnswerContainer>

      {(status)
        ? <Button type="button" onClick={() => onClick()}>Collapse</Button>
        : null }

      {(!status && answers.length > 2) ? <Button type="button" onClick={() => onClick()}>SEE MORE ANSWERS</Button> : null}

    </div>
  );
}
