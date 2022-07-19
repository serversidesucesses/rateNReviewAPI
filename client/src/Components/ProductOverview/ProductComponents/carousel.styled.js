import styled from 'styled-components';
// this style sheet only includes Carousel.jsx and its child
// CarouselImage.jsx and CarousselThumbnailImage.jsx

// the parent grid is ProductDescriptionGrid in StyleSelector
export const CarouselLayout = styled.div`
  height: 40rem;

`;



// export const CarouselThumbnailContainer = styled.div`
//   position: absolute;
//   margin-top: 1.8rem;
//   margin-left: 1.5rem;
//   max-height: 32rem;
//   width: 6rem;
//   z-index: 11;
// `;

// export const CarouselThumbnailGrid = styled.div`
//   display: grid;
//   grid-template-rows: auto;
//   align-content: start;
//   max-height: 32rem;
//   gap: 10px;
//   border-radius: 5px;
//   padding-right: 10px;
//   overflow-y: scroll;
// `;

// export const ThumbnailImage = styled.img`
//   object-fit: cover;
//   position: ${(props) => props.position || 'relative'};
//   left: ${(props) => props.left || '0.2rem'};
//   width: 100%;
//   height: ${(props) => props.height || '5rem'};
//   cursor: pointer;
//   opacity: ${(props) => props.opacity || 0.3};
//   z-index: 13;
// `;

export const CarouselImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

export const MainImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const ExpandedcarouselThumbnailGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
  max-height: 3rem;
  grid-template-columns: repeat(auto-fill,50px);
  grid-auto-flow: column;
  grid-auto-columns: 50px;
  overflow-x: auto;
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
`;

export const ExpandedImage = styled.img`
position: fixed;
width: 75%;
height: 95%;
top: 2.5%;
left: 12.5%;
right: 12.5%;
bottom: 2.5%;
z-index: 10;
perspective: 1000px;
opacity: 1;
`;

// -------------------------------------------

export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  height: 32rem;
  width: 100px;
  scroll-snap-type: x promximity;
  scroll-behavior: smooth;
  z-index: 11;
`;

export const CarouselThumbnailGrid = styled.ol`

li {
  list-style: none;
  width:  80px;
  flex-shrink: 0;
}
li > *, li :is(picture, figure, img) {
  width: 100%;
}
li:first-of-type {
  scroll-snap-align: start;
}
li:last-of-type {
  scroll-snap-align: end;
}
`;

export const ThumbnailImage = styled.img`
  padding: 2px;
  display: block;
  height: 100px;
  border: 1px solid grey;
  border-radius: 5%;
  transform: translate(-80%, 0);

`;
