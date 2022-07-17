import React, { useState, useEffect } from "react";
import { MainImage } from './carousel.styled.js'

// here photo is an object that contain both the thumbnailurl and normal url
const CarouselImage = ({ photo, activePhotoIndex}) => {
  // console.log('photo.url in CarouselImage is:', photo.url)
  return (
    <MainImage fetchpriority="high" src={photo.url}  />
  )
}

export default CarouselImage