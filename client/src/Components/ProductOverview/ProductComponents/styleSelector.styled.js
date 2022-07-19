import styled from 'styled-components';
// this style file only include StyleSelector.jsx and its child (excluding Carousel.jsx)
// SizeQuantitySelector.jsx, StylePhoto.jsx

// styleSelectorLayout is the right top orange grid
export const StyleSelectorLayout = styled.div`
  grid-column-start: 2,
  grid-column-end: 3;
  grid-template-rows: auto auto auto auto auto auto;
  z-index: 3;
`
export const CategoryNameContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  position: grid;
  grid-template-rows: auto auto;
`
export const CategoryContainer = styled.div`
  font-size: x-large;
`
export const ProductNameContainer = styled.div`
  font-size: xx-large;
`

export const PriceStyleContainer = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  position: grid;
  grid-template-rows: auto auto;
  z-index: 3;
`
export const StylePhotoGrid = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
`
export const StylePhotoContainer = styled.div`

`

export const StyleCheckmark = styled.img`

`

export const StylePhotoThumbnail = styled.img`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`

export const SizeQtyContainer = styled.div`
  grid-row-start: 5;
  grid-row-end: 6;
`

