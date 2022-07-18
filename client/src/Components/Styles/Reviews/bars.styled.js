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

export const CharacterBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2px;
  width: 214px;
  grid-row: 2;
  grid-column: 1/4;
  position: relative;
`;

export const CharacterBar = styled.div`
  height: 8px;
  width: 70px;
  background-color: rgb(210, 210, 210);
`;

export const Icon = styled.img`
  position: absolute;
  width: 14px;
  top: -6px;
  z-index: 1;
  margin-left: -7px;
  padding: 0;
`;

export const CharacteristicContainer = styled.div`
  display: grid;
  position: relative;
  width: 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 25px 10px 15px;
  padding-bottom: 20px;
`;

export const CharacterDescription = styled.span`
  grid-row: 3;
  font-size: 12px;
`;

export const CharacterName = styled.span`
  grid-row: 1;
  grid-column: 1/2;
  font-size: 15px;
`;
