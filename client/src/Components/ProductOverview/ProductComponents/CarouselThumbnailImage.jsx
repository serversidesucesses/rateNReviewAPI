import React, { useEffect, useRef } from 'react';
import { ThumbnailImage } from './carousel.styled.js';

// expandStatus not in use right now.
function CarouselThumbnailImage({
  photo, handleClick, expand, index, activePhotoIndex,
}) {
  // reload when image is expanded
  function handleOnClick() {
    handleClick(index);
  }
  console.log(expand);
  let display = null;
  if (expand) {
    if (activePhotoIndex === index) {
      display = <li clasName="list-item"><ThumbnailImage src={photo.url} onClick={handleOnClick} height="5rem" positon="static" left="0" opacity="1" /></li>;
    } else {
      display = <li clasName="list-item"><ThumbnailImage src={photo.url} onClick={handleOnClick} height="3rem" positon="static" left="0" /></li>;
    }
  } else if (!expand) {
    if (activePhotoIndex === index) {
      display = <li clasName="list-item">
        <ThumbnailImage src={photo.url}  onClick={handleOnClick} opacity="1" /></li>;
    } else {
      display = <li clasName="list-item"><ThumbnailImage src={photo.url}  onClick={handleOnClick} opacity="0.5" /></li>;
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
