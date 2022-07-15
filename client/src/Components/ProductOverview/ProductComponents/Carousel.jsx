import React, { useState, useEffect } from "react";
import CarouselImage from "./CarouselImage.jsx";
import CarouselThumbnailImage from "./CarouselThumbnailImage.jsx";
import { FaAngleDown, FaAngleUp, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { CarouselLayout, CarouselThumbnailContainer, CarouselThumbnailGrid, CarouselImageContainer, CarouselButtonDown, CarouselButtonUp, CarouselButtonRight, CarouselButtonLeft } from './carousel.styled.js'

// currentStyle is an object contains all info about this style
//
const Carousel = ({ currentStyle, productId }) => {
  // index for current image
  let [activePhotoIndex, SetActivePhotoIndex] = useState(0);
  // check expand state, haven't implemented it yet
  let [isExpanded, setIsExpanded] = useState(false);
  let numPhotos = currentStyle.photos.length;

  console.log('currentStyle from carousel is:', currentStyle);
  console.log('currentStyle photo array length:', currentStyle.photos.length);
  console.log('current activePhotoIndex is: ', activePhotoIndex)

  if (numPhotos <= activePhotoIndex) {
    SetActivePhotoIndex(numPhotos - 1);
  }

  // when productId change, default image change back to first img
  useEffect(() => {
    SetActivePhotoIndex(0)
  }, [productId])

  // set up infinite loop for the carousel
  const handleClick = (index) => {
    if (index === (numPhotos)) {
      // or hide right button
      index = 0;
    } else if (index < 0) {
      // or hide left button
      index = numPhotos - 1;
    }
    // reset the activePhotoIndex base on click
    SetActivePhotoIndex(index);
  }

return (
  <CarouselLayout>
    <CarouselThumbnailContainer>
      {<CarouselButtonUp onClick={() => handleClick(activePhotoIndex - 1)}><FaAngleUp /></CarouselButtonUp>}
      <CarouselThumbnailGrid>
        {/* here each photo is an object that contain url and thumbnail_url */}
        {currentStyle.photos.map((photo, index) => {
          return (
          <CarouselThumbnailImage photo={photo} activePhotoIndex={activePhotoIndex} handleClick={handleClick} index={index} key={currentStyle.photos[index].url + index} />
          )
        })}
      </CarouselThumbnailGrid>
      {<CarouselButtonDown onClick={() => handleClick(activePhotoIndex + 1)}>
          <FaAngleDown />
      </CarouselButtonDown>}
    </CarouselThumbnailContainer>

    <CarouselImageContainer>
      <CarouselButtonLeft onClick={() => handleClick(activePhotoIndex - 1)}><FaAngleLeft />
      </CarouselButtonLeft>

      <CarouselButtonRight onClick={() => handleClick(activePhotoIndex + 1)}><FaAngleRight />
      </CarouselButtonRight>

      <CarouselImage photo={currentStyle.photos[activePhotoIndex]} activePhotoIndex={activePhotoIndex} />

    </CarouselImageContainer>
  </CarouselLayout>
)
}


export default Carousel