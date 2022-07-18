import React, { useEffect, useRef } from "react";
import { ThumbnailImage } from './carousel.styled.js';

// expandStatus not in use right now.
const CarouselThumbnailImage = ({ photo, activePhotoIndex, expandStatus, handleClick, index, alt }) => {

  // reload when image is expanded
  useEffect(() => {
  }, [expandStatus])

  const displayThumbnail = () => {
    //console.log('photo inside thumbnail.jsx is: ', photo)
    if (!expandStatus) {
      return <ThumbnailImage src={photo.url} onClick={() => handleClick(index)} />
    } else {
      return <div onClick={() => handleClick(index)}></div>
    }
  }

  return (
    <>
      {displayThumbnail()}
    </>
  )
}

export default CarouselThumbnailImage