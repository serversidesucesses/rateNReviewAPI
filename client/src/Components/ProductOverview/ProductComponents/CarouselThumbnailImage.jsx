import React, { useEffect, useRef } from "react";
import { ThumbnailImage } from './carousel.styled.js';

// isExpanded not in use right now.
const CarouselThumbnailImage = ({ photo, activePhotoIndex, isExpanded, handleClick, index, alt }) => {

  // reload when image is expanded
  useEffect(() => {
  }, [isExpanded])

  const displayThumbnail = () => {
    if (!isExpanded) {
      return <ThumbnailImage src={photo.thumbnail_url} onClick={() => handleClick(index)} />
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