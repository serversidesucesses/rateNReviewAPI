/* eslint-disable no-undef */
/* eslint-disable camelcase */
import styled from 'styled-components';

export const Question_Answer = styled.div`
  height: 500px;
  width: 70%;
  margin: 0 auto;
  overflow: scroll;
  border: 2px solid black;
  padding: 10px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
`;

export const Span = styled.span`
  padding-left: 2px;
  `;

export const More_Answer = styled.div`
  height: 250px;
  overflow: scroll;
  padding: 10px;
  border: 2px solid black;
  width: 80%;
`;

export const Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: 10px;
  margin-top: -18px;
  width: 100%;
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-top: -20px;
  margin-bottom: -25px;
`;

export const A = styled.span`
  display: inline-block;
  padding-left: 5px;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
`;

export const Q = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  span {
    margin-right: 10px;
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
