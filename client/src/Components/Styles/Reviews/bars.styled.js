import styled from 'styled-components';

export const ReviewContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 85vw
  // @media (min-width: 768px) {
  //   // max-width: 600px;
  //   // margin-right: 100px;
  // }
  // @media (max-width: 375px) {
  // }
`;

export const ReviewListButtonStyled = styled.button`
  // padding: 0;
  // border: 4px black;
  // background: none;
  // text-decoration: underline;
  // cursor: pointer;
  // font-size: 15px;
  // margin-left: 15px;
  // margin-right: 15px;

  // padding-left: 1.5rem;
  // padding-right: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  height: 30px;
  background-color: white;
  font-size: 18px;
  cursor: pointer;
  margin-right: 2.5px;
  margin-left: 2.5px;

  &:hover {
    background-color: #99AEAD;
  }
  @media (max-width: 400px) {
    margin-left: 30px;
  }
`;
export const BarStyled = styled.div`
  height: 12px;
  width: 180px;
  border-radius: 10px;
  background-color: rgb(210, 210, 210);
  margin: 10px;
  position: relative;
  bottom: 4px;
  .percentagefill {
    height: 100%;
    border-radius: 10px;
    background-color: #5AC856;
    text-align: right;
    padding: 0;
  }
  .percentagefill-opened {
    height: 100%;
    border-radius: 10px;
    background-color: #FE8214;
    text-align: right;
    padding: 0;
  }
`;

export const BarContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 340px;
  cursor: pointer;
  &:hover .percentagefill {
    background-color: #E0EF5D;
  }
`;
export const StarSpanStyled = styled.span`
  text-decoration: underline;
`;

export const CharacterBarContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2px;
  width: 214px;
  grid-row: 2;
  grid-column: 1/4;
  position: relative;
`;

export const CharacterBarStyled = styled.div`
  height: 9px;
  width: 70px;
  background-color: rgb(210, 210, 210);
`;

export const IconStyled = styled.img`
  position: absolute;
  width: 14px;
  top: -6px;
  z-index: 1;
  margin-left: -7px;
  padding: 0;
`;

export const CharacteristicContainerStyled = styled.div`
  display: grid;
  position: relative;
  width: 214px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 25px 10px 15px;
  padding-bottom: 20px;
  word-break: break-all;
`;

export const CharacterDescriptionStyled = styled.span`
  grid-row: 3;
  font-size: 12px;
`;

export const CharacterName = styled.span`
  grid-row: 1;
  grid-column: 1/2;
  font-size: 15px;
`;

export const MainGridStyled = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 130px;
  // margin-left: 50px;
  // margin-right: 30px;
  @media (min-width: 501px) {
    grid-template-columns: 40% 60%;
    grid-gap: 50px;
  }
  @media (max-width: 500px) {
    grid-template-rows: auto auto;
  }
`;

export const RatingBreakdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 100%;
  // @media (min-width: 768px) {
  // }
  @media (max-width: 400px) {
    margin-left: 20px;
  }
`;

export const CharacterListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 45px;
`;

export const StarListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReviewButtonStyled = styled.button`
  padding: 0;
  border: none;
  background: none;
  text-decoration: underline;
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
  font-size: 13px;
  font-weight: light;
  opacity:0.6;
`;

export const SpanStyled = styled.span`
  padding-left: 2px;
  font-size: 13px;
  font-weight: light;
  opacity: 0.6;
`;

export const CharacteristicRatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-evenly;
  margin-bottom: 0px;
  width: 400px;
`;

export const RadioButtonContainerStyled = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RadioButtonStyled = styled.input`
  align-self: center;
`;

export const ReviewListStyled = styled.div`
  margin-top: 16px;
  margin: 0 auto;
  max-width: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
  max-height: 500px;
  // @media (max-width: 375px) {
  //   width: 400px;
  // }
  // @media (max-width: 400px) {
  //   margin-left: 30px;
  // }
`;

export const ReviewStyled = styled.div`
  padding: 10px;
  border-bottom: 1px dashed;
  margin-top: 0px;
`;

export const SummaryStyled = styled.h3`
  display: flex;
  align-items: flex-start;
  color: #007185;
  font-weight: bold;
  margin-left: 0px;
  width: 60%;
`;

export const BodyStyled = styled.p`
`;

export const NameDateStyled = styled.small`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 10px;
`;

export const StarStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckStyled = styled.img`
  width: 20px;
`;

export const SmallStyled = styled.small`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const OverallRatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 50px;
  margin-bottom: -40px;
`;

export const SortBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 400px) {
    margin-left: 30px;
  }
`;

export const SelectStyled = styled.select`
  // padding-left: 3px;
  border-color: transparent;
  display: flex;
  min-height: 38px;
  margin-left: -0.5px;
  font-family: 'Oswald', sans-serif;
  flex-wrap: wrap;
  text-decoration: underline 2px;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;
