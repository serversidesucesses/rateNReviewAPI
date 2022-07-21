import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h4, p {
    margin: 0;
    font-weight: bold;
  }
  p {
    font-size: 15px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    overflow: ${(props) => props.overflow || 'auto'};
  }
`;
