import React, { useEffect, useRef } from 'react';
import { ThumbnailImage } from './carousel.styled.js';

// expandStatus not in use right now.
function CarouselThumbnailImage({
  photo, handleClick, expand, index, activePhotoIndex, transform,
}) {
  // reload when image is expanded
  function handleOnClick() {
    handleClick(index);
  }

  let display = null;
  if (expand) {
    if (activePhotoIndex === index) {
      display = <ThumbnailImage src={photo.url} onClick={handleOnClick} transform={transform} height="5rem" positon="static" left="0" opacity="1" />;
    } else {
      display = <ThumbnailImage src={photo.url} onClick={handleOnClick} transform={transform} height="3rem" positon="static" left="0" />;
    }
  } else if (!expand) {
    if (activePhotoIndex === index) {
      display = <ThumbnailImage src={photo.url}  onClick={handleOnClick} transform={transform} opacity="1" />;
    } else {
      display = <ThumbnailImage src={photo.url}  onClick={handleOnClick} transform={transform} opacity="0.5" />;
    }
  }

  return (
    <>
      { display }
    </>
  );
}

export default CarouselThumbnailImage;
// alt="photo" width="100px" height="100px" loading="lazy"
// alt="photo" width="100px" height="100px" loading="lazy"
