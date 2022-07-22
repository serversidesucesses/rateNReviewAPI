import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
    box-sizing: border-box;
    overflow: ${(props) => props.overflow || 'auto'};
  }
`;


