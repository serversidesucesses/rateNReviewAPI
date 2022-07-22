import styled from 'styled-components';
// this style file only include StyleSelector.jsx and its child (excluding Carousel.jsx)
// SizeQuantitySelector.jsx, StylePhoto.jsx

// styleSelectorLayout is the right top orange grid
export const StyleSelectorLayout = styled.div`
  grid-column-start: 2,
  grid-column-end: 3;
  grid-template-rows: auto auto auto auto auto auto auto;
  z-index: 3;
`
export const RatingCartGrid = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: auto auto;
  overflow: hidden;
  margin-bottom: 1.5rem;
`
export const RatingContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`

export const CartLogoContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: right;
  padding-right: 10%;
  font-size: 1.3em;
  color: black;
`

export const CategoryNameContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  position: grid;
  grid-template-rows: auto auto;
`
export const CategoryContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 2rem;
`
export const ProductNameContainer = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 3.5rem;
`

export const PriceStyleContainer = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  position: grid;
  grid-template-rows: auto auto;
  z-index: 3;
`
export const StyleText = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 1rem;
`
export const StylePhotoGrid = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  padding-bottom: 1rem;
`
export const StylePhotoContainer = styled.div`

`

export const StyleCheckmark = styled.img`

`
export const StylePhotoThumbnail = styled.img`
  position: relative;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  padding-bottom: 2%;
  border-radius: 50%;
  cursor: pointer;
`
export const SizeQtyContainer = styled.div`
  grid-row-start: 5;
  grid-row-end: auto;

`
export const SizeQtyStyle = styled.select`
  height: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  font-size: 1rem;
  cursor: pointer;
`

export const AddToCartFavoriteContainer = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin-bottom: 2%;
  margin-top: 2%;
`
export const AddToCartButton = styled.a`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #99AEAD
  }
`
export const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.5rem;
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
  padding-right: 1%;
  border-radius: 10%;
`

