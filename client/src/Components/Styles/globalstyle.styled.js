import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    overflow: ${(props) => props.overflow || 'auto'};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
