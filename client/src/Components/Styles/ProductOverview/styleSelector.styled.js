import styled from 'styled-components';
// this style file only include StyleSelector.jsx and its child (excluding Carousel.jsx)
// SizeQuantitySelector.jsx, StylePhoto.jsx

// styleSelectorLayout is the right top orange grid
export const StyleSelectorLayout = styled.div`
  grid-column-start: auto,
  grid-column-end: auto;
  max-width: 100%;
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
  font-weight: 500;
  font-size: 3.2rem;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 100%;
  padding-bottom: 1rem;
`
export const StylePhotoContainer = styled.div`
  max-width: 100%;
`

export const StyleCheckmark = styled.img`

`
export const StylePhotoThumbnail = styled.img`
  position: relative;
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  // margin: 5px;
  border-radius: 50%;
  cursor: pointer;
  max-width: 100%;
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
  border: 1px solid black;
  font-weight: 200;
  font-size: 1rem;
  cursor: pointer;

`

export const AddToCartFavoriteContainer = styled.div`
  grid-row-start: auto;
  grid-row-end: auto;
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 5px;
  margin-bottom: 2%;
  margin-top: 2%;
`
export const AddToCartButton = styled.a`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-right: 1.5rem;
  font-family: 'Oswald', sans-serif;
  background-color: #F0F0F0;
  font-weight: 200;
  width: 122px;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #99AEAD
  }
`
export const FavoriteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  // margin-left: -5;
  border: 1px solid black;
  width: 48px;
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

