import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 13px;
  font-weight: lighter;
  opacity:0.4;
  font-family: 'Oswald', sans-serif;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18rem;
  padding-right: 15px;
`;

export const ButtonContainerAnsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  margin-top: -0.09em;
  margin-bottom: 0.3em;
`;

export const SeeMoreBtnStyled = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 13px;
  font-weight: lighter;
  opacity:0.4;
  // font-family: 'Oswald', sans-serif;
  // font-weight: 200;
  // height: 30px;
  // background-color: white;
  // margin-left: 5px;
  // font-size: 18px;
  // cursor: pointer;
  // &:hover {
  //   background-color: #99AEAD;
  // }
`;

export const MoreQuestionBtnStyled = styled.button`
  // margin-left: 1rem;
  // border: none;
  // background: none;
  // text-decoration: underline;
  // cursor: pointer;
  // font-size: 13px;
  // font-weight: lighter;
  // opacity:0.4;
  margin-right: 5px;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  // font-size: 18px;
  min-height: 3rem;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #99AEAD;
  }
`;
