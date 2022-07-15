import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  height: 70%;
  width: 60%;
  border-radius: 10px;
  z-index: 10;
  background: dodgerblue;
  padding: 20px;

  h2 {
    text-align: center;
  }
  form {
    width: 60%;
    height: 60%;
    position: fixed;
    top: 15%;
    left: 35%;
    z-index: 11;

    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  input {
    width: 50%;
    height: 30px;
    margin-top: 20px;
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


// position: fixed;
// top: 25%;
// left: 20%;
// background: black;
// width: 60%;
// height: 60vh;
// z-index: 1;

