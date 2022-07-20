/* eslint-disable no-undef */
/* eslint-disable camelcase */
import styled from 'styled-components';

export const Question_AnswerStyled = styled.ul`
  max-height: 500px;
  width: 70%;
  margin: 0 auto;
  max-height: 1000px;
  overflow: scroll;
  padding: 15px;
  font-family: Arial;
  font-size: 14px;
  background: glacier-white;
  maring-bottom: -30px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const QuestionListItem = styled.li`
  padding: 10px;
  margin-top: 0px;
  list-style: none;
  border-bottom: 1px dashed;
`;

export const Span = styled.span`
  padding-left: 2px;
  font-size: 13px;
  font-weight: lighter;
  opacity: 0.4;
  `;

export const More_Answer = styled.div`
  height: 250px;
  overflow: scroll;
  padding: 10px;
  border: 2px solid black;
  width: 80%;
`;

export const Answer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding-top: 10px;
  margin-top: -17px;
  margin-left: 5px;
  width: 100%;
`;

export const AnswerContainer = styled.ul`
  display: flex;
  min-height: 40px;
  padding: 5px;
  width: 100%;

`;

export const A = styled.span`
  display: inline-block;
  padding-left: 6px;
  font-size:  15px;
  font-weight: bold;
`;

export const Q = styled.div`
  display: flex;
  align-items: flex-start;
  color: #007185;
  font-size: 17px;
  font-weight: bold;
  margin-left: 10px;
  width: 60%;
  span {
    margin-right: 10px;
  }
  p {
    margin: 0;
  }
`;

export const SearchBar = styled.input`
  width: 98%;
  height: 4em;
  padding: 1em;
  margin-bottom: 0.2em;
  margin-top: -1em;
`;

export const SeeMoreQuestionStyled = styled.div`
  max-height: 100px;
  width: 80%;
  margin: auto 0;
  padding: 15px;
  font-family: Arial;
  font-size: 14px;
  background: glacier-white;
`;
