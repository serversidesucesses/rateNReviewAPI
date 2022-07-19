import styled from 'styled-components';
// this style file only include StyleSelector.jsx and its child (excluding Carousel.jsx)
// SizeQuantitySelector.jsx, StylePhoto.jsx

// styleSelectorLayout is the right top orange grid
export const StyleSelectorLayout = styled.div`
  grid-column-start: 2,
  grid-column-end: 3;
  grid-template-rows: auto auto auto auto auto auto auto;
  gap: 1rem;
  z-index: 3;
`
export const RatingCartGrid = styled.div`
grid-row-start: 1;
grid-row-end: 2;
position: grid;
grid-template-columns: auto auto;
`
export const RatingContainer = styled.div`

`

export const CartLogoContainer = styled.div`
  display: flex;
  justify-content: right;
  font-size: 1.5em;
  color: black;
  margin-top: 15%;
  margin-bottom: 15%;
  margin-left: 15%;
  margin-right: 15%;
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
  grid-row-end: auto;
`
export const SizeQtyStyle = styled.select`
  height: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;

  cursor: pointer;
`

export const AddToCartFavoriteContainer = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`
export const AddToCartButton = styled.button`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 3rem;
  font-size: 1rem;

  cursor: pointer;
`
export const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 2rem;
  margin-left: 1rem;
  color: rgb(180, 56, 77);
  cursor: pointer;
`

export const ShareGrid = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
`
export const SharePhoto = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 10%;
`

