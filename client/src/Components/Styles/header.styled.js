import styled from 'styled-components';

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #658c8a;
`
export const LogoContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`
export const LogoText = styled.h1`
  padding-left: 10%;
  // font-weight: 700;
  font-size: 30px;
  color: black;
`

export const HeaderButtonContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const HeaderClick = styled.button`
  background-color: Transparent;
  border: none;
  font-family: 'Oswald', sans-serif;
  height:
  // font-weight: 200;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #C4CDC1
  }
`
export const HeaderSearchContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  display: inline-grid;
  grid-template-rows: 1fr;
`
export const HeaderSearch = styled.button`
  background-color: Transparent;
  border: none;
  font-family: 'Oswald', sans-serif;
  // font-weight: 200;
  // font-size: 30px;
  cursor: help;
`
