/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import AnswerList from './answerList.jsx';
import Modal from './Modal/Modal.jsx';
import AddAnswer from './Forms/AddAnswer.jsx';
import { Button, ButtonContainer } from '../Styles/Q&A/buttons.styled';
import {
  QuestionListItem, Question, Span, More_Answer, AnswerContainer, A, Q, Answer,
} from '../Styles/Q&A/container.styled';

const axios = require('axios');

export default function QuestionList({ question, helpfulness, reportQ }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [helpfulData, setHelpfulData] = useState(0);
  const [status, setStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportA, setReportA] = useState(false);

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
  }, [count, helpfulData, reportA]);

  // ----------setter functions being passed to child component-------------------------------------
  function fetchHelpfulData(answer_id) {
    axios.put(`/questions/answers/helpful/?answer_id=${answer_id}`)
      .then(() => setHelpfulData((prevCount) => prevCount + 1))
      .catch((error) => console.log(error));
  }

  function report(answer_id) {
    axios.put(`/questions/reportA/?answer_id=${answer_id}`)
      .then(() => {
        setReportA(true);
        alert('Answer has been reported');
      })
      .catch((error) => console.log(error));
  }
  // --------------setter function for collapse and more answer-----------
  function moreQuestions() {
    status ? setCount(2) : setCount(1000);
    status ? setStatus(false) : setStatus(true);
  }

  // -------- validator function for Modal ------
  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  // need to validate form and then send to api
  const onFormValidation = (data, questionId) => {
    console.log('data', data, 'questionId', question.question_id);
  };

  return (
    <div>
      { isModalOpen
        ? (
          <Modal
            title="This is the modal's title"
            description="A short description of the modal's contents"
            isOpen={isModalOpen}
            onCloseRequest={onModalCloseRequest}
          >
            <AddAnswer onFormValidation={onFormValidation}/>
          </Modal>
        )
        : null }
      <QuestionListItem style={{ position: 'relative' }}>
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
            <Button type="button" onClick={() => reportQ(question.question_id)}>Report</Button>
            <Span>|</Span>
            <Button type="button" onClick={() => setIsModalOpen(true)}>Add Answer</Button>
          </ButtonContainer>
        </Question>
        <AnswerContainer>
          <A>A: </A>
          <Answer>
            { status === true
              ? (
                <More_Answer>
                  { answers.map((answer) => <AnswerList key={answer.answer_id} helpfulness={fetchHelpfulData} report={report} answer={answer} />)}
                </More_Answer>
              )
              : <>{ answers.map((answer, index) => <AnswerList key={index} helpfulness={fetchHelpfulData} report={report} answer={answer} />)}</>}

            {(status)
              ? <Button type="button" onClick={() => onClick()}>Collapse</Button>
              : null }
          </Answer>
          {(!status && answers.length > 2) ? <Button type="button" onClick={() => moreQuestions()}>SEE MORE ANSWERS</Button> : null}
        </AnswerContainer>
      </QuestionListItem>
    </div>
  );
}
