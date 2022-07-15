import styled from 'styled-components';

export const MainImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`
export const ThumbnailImage = styled.img`
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 5rem;
  cursor: pointer;
  opacity: 1;
`
export const CarouselLayout = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  gap: 1rem;
  height: 41rem;
`
export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0%;
  max-height: 30rem;
  width: 6rem;
  z-index: 3;
`
export const CarouselThumbnailGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-content: start;
  max-height: 32rem;
  gap: 1rem;
  overflow-y: scroll;
  border-radius: 5px;
  padding-right: 10px;
`
export const CarouselImageContainer = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`
export const CarouselButtonUp = styled.button`
  top: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  width: 100%;
  opacity: 50%;
`
export const CarouselButtonDown = styled.button`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  width: 100%;
  opacity: 50%;
`
export const CarouselButtonLeft = styled.button`
  position: absolute;
  bottom: 50%;
  left: 12%;
  font-size: 2rem;
  z-index: 10;
  opacity: 50%;
  border-radius: 20%;
`
export const CarouselButtonRight = styled.button`
  position: absolute;
  bottom: 50%;
  right: 2%;
  font-size: 2rem;
  z-index: 10;
  opacity: 50%;
  border-radius: 20%;
`