import React, { useState, useEffect } from 'react';
import {
  FaAngleDown, FaAngleUp, FaAngleRight, FaAngleLeft,
} from 'react-icons/fa';
import CarouselImage from './CarouselImage.jsx';
import CarouselThumbnailImage from './CarouselThumbnailImage.jsx';
import {
  ExpandedView, ExpandedImage, CarouselLayout, CarouselThumbnailContainer, CarouselThumbnailGrid, CarouselImageContainer, CarouselButtonDown, CarouselButtonUp, CarouselButtonRight, CarouselButtonLeft,
} from './carousel.styled.js';

// currentStyle is an object contains all info about this style
//
function Carousel({ currentStyle, productId }) {
  const [currentStylePhotos, setCurrentStylePhotos] = useState(currentStyle.photos);
  const [activePhotoIndex, SetActivePhotoIndex] = useState(0);
  // check expand state, haven't implemented it yet
  const [leftButtonStatus, setLeftButtonStatus] = useState(false);
  const [rightButtonStatus, setRightButtonStatus] = useState(true);
  const [expandStatus, setExpandStatus] = useState(false);

  const numPhotos = currentStyle.photos.length;

  // console.log('currentStyle from carousel is:', currentStyle);
  // console.log('currentStyle photo array length:', currentStyle.photos.length);
  // console.log('current activePhotoIndex is: ', activePhotoIndex)
  // console.log('rightbuttonstatus is : ', rightButtonStatus)
  // console.log('activePhotoIndex === (numPhotos - 1): ', (activePhotoIndex === (numPhotos - 1)))

  // when productId change, default image change back to first img
  useEffect(() => {
    SetActivePhotoIndex(0);
  }, [productId]);

  useEffect(() => {
    setCurrentStylePhotos(currentStyle.photos);
    console.log('currentStyle from useEffect: ', currentStyle);
  }, [currentStyle]);

  useEffect(() => {
    if (activePhotoIndex === 0) {
      setLeftButtonStatus(false);
    } else if (activePhotoIndex !== 0) {
      setLeftButtonStatus(true);
    }
    if (activePhotoIndex !== (numPhotos - 1)) {
      setRightButtonStatus(true);
    }
  }, [activePhotoIndex]);

  if (numPhotos <= activePhotoIndex) {
    SetActivePhotoIndex(0);
  }
  // conditionally display left/right buttons

  const handleClick = (activePhotoIndex) => {
    if (activePhotoIndex === (numPhotos - 1)) {
      setRightButtonStatus(false);
    }
    SetActivePhotoIndex(activePhotoIndex);
  };

  // const toggleExpandStatus = () => {
  //   setExpandStatus(!expandStatus);
  // };
  console.log('currentStylePhotos :', currentStylePhotos);
  console.log('currentStyle :', currentStyle);
  return (
    <>
      {expandStatus
        ? <ExpandedImage src={currentStyle.photos[activePhotoIndex].url} onClick={() => setExpandStatus((prevStatus) => (!prevStatus))} />
        : null}
      <CarouselLayout id='carouselLayout'>
        <CarouselThumbnailContainer id='carouseThumbnailContainer'>
          {leftButtonStatus ? <CarouselButtonUp onClick={() => handleClick(activePhotoIndex - 1)}><FaAngleUp /></CarouselButtonUp> : null}
          <CarouselThumbnailGrid id='carouselThumbnailGrid'>
            {/* here each photo is an object that contain url and thumbnail_url */}
            {currentStylePhotos.map((photo, index) => (
              <CarouselThumbnailImage photo={photo} activePhotoIndex={activePhotoIndex} handleClick={handleClick} index={index} key={currentStyle.photos[index].url + index} />
            ))}
          </CarouselThumbnailGrid>
          {rightButtonStatus ? (
            <CarouselButtonDown onClick={() => handleClick(activePhotoIndex + 1)}>
              <FaAngleDown />
            </CarouselButtonDown>
          ) : null}
        </CarouselThumbnailContainer>

        <CarouselImageContainer id="carouselImageContainer">
          {leftButtonStatus ? (
            <CarouselButtonLeft onClick={() => handleClick(activePhotoIndex - 1)}>
              <FaAngleLeft />
            </CarouselButtonLeft>
          ) : null}

          {rightButtonStatus ? (
            <CarouselButtonRight onClick={() => handleClick(activePhotoIndex + 1)}>
              <FaAngleRight />
            </CarouselButtonRight>
          ) : null}
          <CarouselImage photo={currentStyle.photos[activePhotoIndex]} setExpandStatus={setExpandStatus} />

        </CarouselImageContainer>
      </CarouselLayout>
    </>
  );
}

export default Carousel;