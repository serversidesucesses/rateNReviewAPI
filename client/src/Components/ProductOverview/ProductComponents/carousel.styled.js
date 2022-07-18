import styled from 'styled-components';
// this style sheet only includes Carousel.jsx and its child
// CarouselImage.jsx and CarousselThumbnailImage.jsx

// the parent grid is ProductDescriptionGrid in StyleSelector
export const CarouselLayout = styled.div`
  height: 40rem;

`;

export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  margin-top: 1.8rem;
  margin-left: 1.5rem;
  max-height: 32rem;
  width: 6rem;
  z-index: 3;
`;

export const CarouselThumbnailGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-content: start;
  max-height: 32rem;
  gap: 10px;
  border-radius: 5px;
  padding-right: 10px;
  overflow-y: scroll;
`;

export const ThumbnailImage = styled.img`
  object-fit: cover;
  position: relative;
  left: 0.2rem;
  width: 100%;
  height: 5rem;
  cursor: pointer;
  opacity: 1;
`;

export const CarouselImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
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

export const ExpandedImage = styled.img`
position: fixed;
top: 5%;
left: 10%;
 width: 80%;
 height: 80%;
 z-index: 6;
 backdrop-filter: blur(8px);
`;