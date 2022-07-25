/* eslint-disable no-undef */
/* eslint-disable camelcase */
import styled from 'styled-components';

export const Question_AnswerStyled = styled.ul`
  max-height: 600px;
  width: 85vw;
  margin: 0 auto;
  overflow-y: auto;
  padding: 15px;
  font-size: 14px;
  background: glacier-white;
  margin-bottom: -0.8rem;
`;

export const QuestionStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
`;

export const QuestionListItemStyled = styled.li`
  padding: 5px;
  margin-bottom: 10px;
  list-style: none;
  border-bottom: 1px dashed;


}
`;

export const SpanStyled = styled.span`
  padding-left: 2px;
  font-size: 13px;
  font-weight: lighter;
  opacity: 0.4;
  `;

export const More_AnswerStyled = styled.div`
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: 5px;
  width: 98%;

`;

export const AnswerStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  margin-left: 5px;
  width: 100%;
  min-height: 40px;
  margin-bottom: 0.3rem;

`;

export const AnswerContainerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 40px;
  padding: 5px;
  width: 100%;

`;


export const AnswerContainer_Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
  width: 100%;
  min-height: 40px;
  margin-bottom: 0.3rem;
`;

export const AStyled = styled.span`
  display: inline-block;
  padding-left: 6px;
  font-size:  15px;
  font-weight: bold;
`;

export const QStyled = styled.div`
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

export const SearchBarStyled = styled.input`
  width: 100%;
  height: 4em;
  padding: 1em;
  margin: 0 auto;
`;

export const SeeMoreQuestionStyled = styled.div`
  max-height: 50px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  width: 65%;
  font-size: 15px;
  padding: 1.5rem;
  background: glacier-white;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom 1px solid black;
`;
