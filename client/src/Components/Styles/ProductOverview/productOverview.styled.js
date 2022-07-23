import styled from 'styled-components';
// this style file is only for ProductOverview
//

// biggest RED grid that contains all child of ProductOverview
export const ProductOverviewGrid = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 85vw;
  margin: 0 auto;
  margin-bottom: 2%;
  padding-top: 2%;
`;

// top BLUE grid that contains header, logo, cart symbol and a small row of promotional line
export const LogoCartGrid = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  background: #6D7975;
`
// top BLUE grid that contains top row, which is the photo carousel, product description, style selector and buttons
export const ProductDescriptionGrid = styled.div`
  display: grid;
  // grid-template-columns: 60% 40%;
  gap: 2rem;

  @media (min-width: 500px) {
    grid-template-columns: 60% 40%;
  }
  @media (max-width: 500px) {
    grid-template-rows: auto auto;
  }
`;

// bottom BLUE grid that contains product information
export const ProductInformationGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  max-height: 200px;
  margin-top: 2%;
  margin-bottom: 2%;
  gap: 2%;
`;


export const VerticalLine = styled.div`
  grid-column-start: auto;
  grid-column-end: auto;
  display: grid;
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  border-left: 1px solid black;
  min-height: 100px;
  max-height: 150px;
`
// bottom right ORANGE container that contains bullet point product description
export const BulletPointDescription = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  max-height: 200px;
  grid-column-start: auto;
  grid-column-end: auto;
  font-size: large;
`