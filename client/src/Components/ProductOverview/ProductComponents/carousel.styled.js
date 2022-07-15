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
  height: 6rem;
  padding: 2px;
  border: 3px solid;
  border-color: whitesmoke;
  cursor: pointer;
  opacity: 1;
`
export const CarouselLayout = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  height: 41rem;
`
export const CarouselThumbnailContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 6rem;
  max-height: 30rem;
  width: 6rem;
  z-index: 3;
`
export const CarouselThumbnailGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-content: start;
  max-height: 30rem;
  gap: 1rem;
  overflow-y: scroll;
  border-radius: 20px;
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
`
export const CarouselButtonDown = styled.button`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
  width: 100%;
`
export const CarouselButtonLeft = styled.button`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 2rem;

`
export const CarouselButtonRight = styled.button`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 2rem;
`