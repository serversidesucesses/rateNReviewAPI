import styled from 'styled-components';

export const Bar = styled.div`
  height: 8px;
  width: 200px;
  background-color: rgb(210, 210, 210);
  margin: 10px;
  position: relative;
  bottom: 4px;


  .percentagefill {
    height: 100%;
    background-color: #5AC856;
    text-align: right;
    padding: 0;
  }
  .percentagefill-opened {
    height: 100%;
    background-color: #FE8214;
    text-align: right;
    padding: 0;
  }
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 318px;
  cursor: pointer;

  &:hover .percentagefill {
    background-color: #E0EF5D;
  }

`;
