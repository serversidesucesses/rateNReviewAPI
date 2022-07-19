import styled from 'styled-components';

export const Form = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  height: 70%;
  width: 100%;
  border-radius: 10px;
  z-index: 10;
  background: dodgerblue;
  padding: 20px;

  form {
    margin-top: 30px;
    width: 100%;
    height: 60%;
    position: absolute;
    top: 15%;
    left: 12%;
    z-index: 11;

    display: flex;
    flex-direction: column;
  }

  input {
    width: 30%;
    height: 30px;
    margin-bottom: 1em;
    margin-top: 0.5em;
    padding: 10px;
  }
  input[name="answer"] {
    height: 80px;
  }
  input[type="submit"] {
    width: 20%;
    height: 40px;
    margin-right: 30px;
    margin-left: 40px;
  }
  input[type="button"] {
    width: 20%;
    height: 40px;
    margin-right: 30px;

  }

`;

export const Body = styled.div`
input {
  width: 72%;
  height: 4em;
}
`;

export const Heading = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: row;

  input {
    width: 80%;
    margin-bottom: -16px;
  }

  p {
    width: 70%;
    margin-bottom: 30px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Buttons = styled.div`
  position: relative;
  left: 10%;
`;
