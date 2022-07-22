import styled from 'styled-components';
// this style file only include ProductInformation.jsx and its child
// ProductDescription.jsx

export const ProductInformationContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 53%;
  max-height: 100px;
  z-index: 3;
`
export const CategoryContainer = styled.div`
  font-family: Arial;
  font-size: x-large;
`

export const ProductNameContainer = styled.div`
  font-family: Arial;
  font-size: xx-large;
`
// this container should be below the carousel
export const ProductDescriptionContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  display: flex;
  width: 45%;
  position: relative;
  gap: 1rem;
  height: 10rem;
  left: 5%;
`
export const SloganDescriptionContainer = styled.div`
  max-height: 200px;
`
export const SloganContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  max-height: 200px;
  font-weight: 400;
  font-size: 1.5em;
  color: black;
`
export const DescriptionContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
 
  font-size: 1em;
  color: black;
`

