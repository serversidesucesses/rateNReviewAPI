import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 13px;
  font-weight: lighter;
  opacity:0.4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  padding-right: 15px;

`;

export const ButtonContainerAns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: -0.09em;
  margin-bottom: 0.3em;
`;

export const MoreAnswer = styled.button`
  margin: 30px;
  margin-top: 50px;
`;
