import styled from 'styled-components';
// this style sheet only includes Carousel.jsx and its child
// CarouselImage.jsx and CarousselThumbnailImage.jsx

// the parent grid is ProductDescriptionGrid in StyleSelector
export const CarouselLayout = styled.div`
  height: 38rem;
  background: #E3D9CF;
  max-width: 100%;
`;

export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  margin-left: 1.0rem;
  max-height: 28rem;
  width: 4rem;
  z-index: 11;
`;

export const CarouselThumbnailGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-content: start;
  max-height: 28rem;
  width: 4rem;
  gap: 10px;
  border-radius: 5px;
  padding-right: 10px;
  overflow-y: scroll;
`;

export const ThumbnailImage = styled.img`
  object-fit: cover;
  position: ${(props) => props.position || 'relative'};
  left: ${(props) => props.left || '0.2rem'};
  height: ${(props) => props.height || '5rem'};
  cursor: pointer;
  width: 4rem;
  opacity: ${(props) => props.opacity || 0.3};
  z-index: 13;
  offset-distance: ${(props) => props.transform || 0}
`;

export const CarouselImageContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: 100%;
  z-index: 10;
`;

export const MainImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  border-radius: 20px;
`;

export const CarouselButtonUp = styled.button`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-top: -1rem;
  font-size: 2rem;
  width: 100%;
  opacity: 50%;
  cursor: pointer;
  border-radius: 10%;
`;

export const CarouselButtonDown = styled.button`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  width: 100%;
  opacity: 50%;
  cursor: pointer;
  border-radius: 10%;
`;

export const CarouselButtonLeft = styled.button`
  position: absolute;
  bottom: 50%;
  left: 14%;
  font-size: 2rem;
  z-index: 5;
  opacity: 50%;
  border-radius: 20%;
  cursor: pointer;
`;

export const CarouselButtonRight = styled.button`
  position: absolute;
  bottom: 50%;
  right: 2%;
  font-size: 2rem;
  z-index: 5;
  opacity: 50%;
  border-radius: 20%;
  cursor: pointer;
`;

// export const ExpandedView = styled.div`

// `;

// -------------------->

export const ExpandedCarouselThumbnailContainer = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  bottom: 5%;
  top: 85%;
  left: 30%;
  right: 30%;
  max-height: 6rem;
  max-width: 80rem;
  z-index: 12;
`;

export const ExpandedCarouselThumbnailGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 16px;
  max-width: 100%;
  max-height: 3rem;
  grid-template-columns: repeat(auto-fill,50px);
  grid-auto-flow: column;
  grid-auto-columns: 50px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ExpandedCarouselButtonLeft = styled.button`
  position: absolute;
  bottom: ${(props) => props.bottom || '50%'};
  left: ${(props) => props.left || '14%'};
  font-size: 2rem;
  z-index: ${(props) => props.zindex || 5};
  opacity: 50%;
  border-radius: 20%;
  cursor: pointer;
  background: #B0B3A2;
`;

export const ExpandedCarouselButtonRight = styled.button`
  position: absolute;
  bottom: ${(props) => props.bottom || '50%'};
  right: ${(props) => props.right || '14%'};
  font-size: 2rem;
  z-index: ${(props) => props.zindex || 5};
  opacity: 50%;
  border-radius: 20%;
  cursor: pointer;
  background: #B0B3A2;
`;

export const ExpandedImageViewStyled = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
background: black;
top: 1%;
left: 1%;
height: 98%;
width: 98%;
z-index: 10;
overflow: auto;
`;

export const ExpandedImage = styled.img`
display: block;
height: 90%;
z-index: 11;
perspective: 1000px;
opacity: 1;
`;

export const MaginifiedImage = styled.img`
display: block;
height: 235%;
z-index:
perspective: 1000px;
opacity: 1;
object-fit: ${(props) => props['object-fit'] || 'null'};
overflow: auto;
`;
// // -------------------------------------------

// export const CarouselThumbnailContainer = styled.div`
//   position: absolute;
//   overflow-y: auto;
//   overflow-x: hidden;
//   height: 32rem;
//   width: 100px;
//   scroll-snap-type: x promximity;
//   scroll-behavior: smooth;
//   z-index: 11;
// `;

// export const CarouselThumbnailGrid = styled.ol`

// li {
//   list-style: none;
//   width:  80px;
//   flex-shrink: 0;
// }
// li > *, li :is(picture, figure, img) {
//   width: 100%;
// }
// li:first-of-type {
//   scroll-snap-align: start;
// }
// li:last-of-type {
//   scroll-snap-align: end;
// }
// `;

// export const ThumbnailImage = styled.img`
//   padding: 2px;
//   display: block;
//   height: 100px;
//   border: 1px solid grey;
//   border-radius: 5%;
//   transform: translate(-80%, 0);

// `;
