import styled from 'styled-components';
// this style file is only for ProductOverview
//

// biggest RED grid that contains all child of ProductOverview
export const ProductOverviewGrid = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 80%;
  margin: 0 auto;
`;
// top BLUE grid that contains top row, which is the photo carousel, product description, style selector and buttons
export const ProductDescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 58% 42%;
  gap: 2rem;
`;
// top left ORANGE container that contains the carousel
export const CarouselContainer = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  gap: 1rem;
  height: 41rem;
`
// top left GREEN container that contains the carousel thumbnails
export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 6rem;
  max-height: 30rem;
  width: 6rem;
  z-index: 3;
`
// top left GREEN grid that contains the carousel thumbnails
export const CarouselThumbnailGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-content: start;
  max-height: 32rem;
  gap: 10px;
  border-radius: 5px;
  padding-right: 10px;
  overflow-y: scroll;
`
// styling for individual carousel thumbnail images
export const CarouselThumbnailImage = styled.img`
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 5rem;
  cursor: pointer;
  opacity: 1;

`
// need styling for currently selected image
// https://stackoverflow.com/questions/68190075/adding-a-styled-line-underneath-tabs-and-highlight-selected-tab


// styling for individual big display image
export const CarouselMainImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`
// top right ORANGE grid that contains all the product details:
// name, style, price, style selector, sizeSelector, qtySelector and addToCart buttons
export const ProductDetailGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 2fr 1fr 2fr 1fr 1fr;
`
// right GREEN grid that contains all the stylePhotos in rows of 4
export const StylePhotoGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
`
// right GREEN grid that contains the select size and qty buttons
export const SizeQuantityGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`
// right GREEN grid that contains the add to cart and favorite buttons
export const CartFavoGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
`

// bottom BLUE grid that contains product information
export const ProductInformationGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.5fr 1fr;
`

// bottom row ORANGE grid that contains product slogan stuff
export const SloganDescriptionGrid = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: 1fr 2fr;
`
export const SloganContainer = styled.div`
  font-size: 1.5em;
  color: black;
`
export const DescriptionContainer = styled.div`
  font-size: 1em;
  color: black;
`

export const VerticalLine = styled.div`
  grid-column-start: 2;
  grid-column-end: 2.5;
  border-left: 1px solid black;
  height: flex;
  justify-content: center;
`
// bottom rihgt ORANGE container that contains bullet point product description
export const BulletPointDescription = styled.div`
  grid-column-start: 2.5;
  grid-column-end: -1;
  font-size: large;
`