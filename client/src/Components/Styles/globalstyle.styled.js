import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    overflow: ${(props) => props.overflow || 'auto'};
  }
`;
