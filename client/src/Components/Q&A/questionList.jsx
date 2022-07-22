/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import AnswerList from './answerList.jsx';
import Modal from './Modal/Modal.jsx';
import AddAnswer from './Forms/addAnswer.jsx';
import { ButtonStyled, ButtonContainerStyled,  SeeMoreBtnStyled } from '../Styles/Q&A/buttons.styled';
import {
  QuestionListItemStyled,
  QuestionStyled,
  SpanStyled,
  More_AnswerStyled,
  AnswerContainerStyled,
  AStyled,
  QStyled,
  AnswerStyled,
  AnswerContainer_Styled
} from '../Styles/Q&A/container.styled';

const axios = require('axios');

export default function QuestionList({ question, helpfulness, reportQ }) {
  // answers only first  two
  // get answers --> sort by helpfulness
  const [allAnswers, setAllAnswers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [helpfulDataA, setHelpfulDataA] = useState(false);
  const [status, setStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportA, setReportA] = useState(false);
  const [answersLength, setAnswerLength] = useState(0);

  useEffect(() => {
    axios.get('/questions/answers', {
      params: {
        question_id: question.question_id,
        page: 1,
        count: 1000,
      },
    })
      .then(({ data }) => {
        setAllAnswers(data.results);
        setAnswers(data.results.slice(0, count));
        setAnswerLength(data.results.length);
      })
      .catch((error) => console.log(error));
  }, [helpfulDataA, reportA, isModalOpen]);

  useEffect(() => {
    setAnswers(allAnswers.slice(0, count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem('helpfulDataA', JSON.stringify(true))
  }, [helpfulDataA])

  useEffect(() => {
    localStorage.setItem('reportAns', JSON.stringify(reportA))
  }, [reportA])

  // ----------setter functions being passed to child component-------------------------------------
  const fetchHelpfulData = (answer_id) => {
    const data = JSON.parse(localStorage.getItem('helpfulDataA'));
    if (data === false) {
      axios.put(`/questions/answers/helpful/?answer_id=${answer_id}`)
      .then(() => setHelpfulDataA(true))
      .catch((error) => console.log(error));
    }

  }

  const report = (answer_id) => {
    const reportAns = JSON.parse(localStorage.getItem('reportAns'));
    if (reportA === false) {
      axios.put(`/questions/reportA/?answer_id=${answer_id}`)
      .then(() => {
        setReportA(true);
        alert('Answer has been reported');
      })
      .catch((error) => console.log(error))
    }

  }

  const moreQuestions = () => {
    status ? setCount(2) : setCount(1000);
    status ? setStatus(false) : setStatus(true);
  }

  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };


  const onFormValidation = (data, questionId) => {
    axios.post(`/questions/answers?question_id=${question.question_id}`, data)
      .then(() => {
          console.log('created');
      })
      .catch(() => alert('error'));
      setIsModalOpen(false);
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
      <QuestionListItemStyled style={{ position: 'relative' }}>
        <QuestionStyled>
          <QStyled>
            <span>Q: </span>
            <h4>{question.question_body}</h4>
          </QStyled>
          <ButtonContainerStyled>
            <div>
              <ButtonStyled type="button" onClick={(() => helpfulness(question.question_id))}>Helpful?</ButtonStyled>
              <SpanStyled>{`Yes (${question.question_helpfulness})`}</SpanStyled>
            </div>
            <SpanStyled>|</SpanStyled>
            <ButtonStyled type="button" onClick={() => reportQ(question.question_id)}>Report</ButtonStyled>
            <SpanStyled>|</SpanStyled>
            <ButtonStyled type="button" onClick={() => setIsModalOpen(true)}>Add Answer</ButtonStyled>
          </ButtonContainerStyled>
        </QuestionStyled>
        <AnswerContainerStyled>
          <AStyled>A: </AStyled>
          <AnswerContainer_Styled>
          {/* <AnswerStyled> */}
            { status === true
              ? (
                <>
                <More_AnswerStyled>
                  { answers.map((answer) => <AnswerList key={answer.answer_id} helpfulness={fetchHelpfulData} report={report} answer={answer} />)}
                </More_AnswerStyled>

              {(status)
                ? < SeeMoreBtnStyled type="button" onClick={() => moreQuestions()}>COLLAPSE</ SeeMoreBtnStyled>
                : null }
               </>)
              : <>{ answers.map((answer, index) => <AnswerList key={index} helpfulness={fetchHelpfulData} report={report} answer={answer} />)}</>}

         </AnswerContainer_Styled>

          {/* </AnswerStyled> */}
          {(!status && answersLength > 2) ? < SeeMoreBtnStyled type="button" onClick={() => moreQuestions()}>SEE MORE ANSWERS</ SeeMoreBtnStyled> : null}
        </AnswerContainerStyled>
      </QuestionListItemStyled>
    </div>
  );
}
