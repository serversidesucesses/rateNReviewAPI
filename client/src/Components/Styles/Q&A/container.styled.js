/* eslint-disable no-undef */
/* eslint-disable camelcase */
import styled from 'styled-components';

export const Question_Answer = styled.ul`
  max-height: 500px;
  width: 70%;
  margin: 0 auto;
  overflow: scroll;
  border: 2px solid black;
  padding: 15px;
  font-family: Arial;
  font-size: 14px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.6em;
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
  padding: 5px;
  width: 100%;

`;

export const A = styled.span`
  display: inline-block;
  padding-left: 5px;
  font-size:  15px;
  font-weight: bold;

`;

export const Q = styled.div`
  display: flex;
  align-items: flex-start;
  color: #007185;
  font-size: 17px;
  font-weight: bold;
  margin-left: 6px;
  width: 60%;
  span {
    margin-right: 10px;
  }
  p  {
    margin: 0;
  }
`;

export const PhotosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    padding-right: 20px;
    width: 100px;
  }
`;

export const SearchBar = styled.input`
  width: 97%;
  height: 4em;
  padding: 1em;
  margin-left: 1.2em;
  margin-bottom: 1em;
  margin-top: -1em;
`;
