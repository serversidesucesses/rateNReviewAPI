import React, { useEffect, useState } from 'react';
// import Carousel from "react-elastic-carousel";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImageGalleryStyle from './ImageGalleryStyle.jsx';
import Carousel from './Carousel.jsx';

import ImageGalleryStyleThumbnails from './ImageGalleryStyleThumbnails.jsx';
import ImageGalleryThumbnails from './ImageGalleryThumbnails.jsx'


// const breakPoints = [
//   {width: 1, itemsToShow: 1},
//   {width: 550, itemsToShow: 2},
//   {width: 768, itemsToShow: 3},
//   {width: 1200, itemsToShow: 4},
// ];
//Up to 7 thumbnail images will be displayed at a given time in the list.
export default function ImageGallery({ currentStylePhotos }) {
  // var currentPhotoArray = currentStyle.photos;

  // const thumbnails = currentStylePhotos.map((photo, index) => {
  //   return (
  //     <ImageGalleryThumbnails currentStylePhoto={photo.thumbnail_url} />
  //   )
  // })

  return (
    <>
    this is a testing Carousel in ImageGallery
    <ul className='CarouselThumbnails'>
      {currentStylePhotos.map((photo, index) => {
        return (
          <ImageGalleryThumbnails currentStylePhoto={photo} />
        )
      })}
    </ul>

    <ul className='Carousel'>
      {currentStylePhotos.map((photo, index) => {
        return (
          <Carousel currentStylePhoto={photo} />
        )
      })}
    </ul>

  </>
  )
}



