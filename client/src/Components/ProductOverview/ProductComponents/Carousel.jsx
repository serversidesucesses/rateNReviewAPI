import React, { useState, useEffect } from 'react';
import {
  FaAngleDown,
  FaAngleUp,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
import Modal from '../../Q&A/Modal/Modal.jsx'
import CarouselImage from './CarouselImage.jsx';
import CarouselThumbnailImage from './CarouselThumbnailImage.jsx';
import {
  CarouselLayout,
  CarouselThumbnailContainer,
  CarouselThumbnailGrid,
  CarouselImageContainer,
  CarouselButtonDown,
  CarouselButtonUp,
  CarouselButtonRight,
  CarouselButtonLeft,
} from './carousel.styled.js';

// currentStyle is an object contains all info about this style
//
function Carousel({ currentStyle, productId }) {
  const [currentStylePhotos, setCurrentStylePhotos] = useState(currentStyle.photos);
  const [activePhotoIndex, SetActivePhotoIndex] = useState(0);
  // check expand state, haven't implemented it yet
  const [leftButtonStatus, setLeftButtonStatus] = useState(false);
  const [rightButtonStatus, setRightButtonStatus] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currPhoto, setCurrPhotoMain] = useState(0);
  const [transform, setTransform] = useState(0);

  const numPhotos = currentStyle.photos.length;

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
    if (activePhotoIndex - 1 === currPhoto) { // right button
      setTransform('-4rem');
    }
    if (activePhotoIndex + 1 === currPhoto) { // left button
      setTransform('4rem');
    }
    SetActivePhotoIndex(activePhotoIndex);
    setCurrPhotoMain(activePhotoIndex);
  };

  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      { isModalOpen
        ? (
          <Modal
            isOpen={isModalOpen}
            onCloseRequest={onModalCloseRequest}
            image={currentStyle.photos[activePhotoIndex].url}
            currentStyle={currentStyle}
            currentStylePhotos={currentStylePhotos}
            handleClick={handleClick}
            activePhotoIndex={activePhotoIndex}
            rightButtonStatus={rightButtonStatus}
            leftButtonStatus={leftButtonStatus}
          />
        )
        : null}

      <CarouselLayout id='carouselLayout'>
        <CarouselThumbnailContainer id='carouseThumbnailContainer'>
          { leftButtonStatus
            ? (
              <CarouselButtonUp
                onClick={() => handleClick(activePhotoIndex - 1)}>
                <FaAngleUp />
              </CarouselButtonUp>
            )
            : null}
          <CarouselThumbnailGrid id='carouselThumbnailGrid'>
            {/* here each photo is an object that contain url and thumbnail_url */}

            {currentStylePhotos.map((photo, index) => (
              <CarouselThumbnailImage
                photo={photo} activePhotoIndex={activePhotoIndex}
                handleClick={handleClick} index={index}
                key={currentStyle.photos[index].url + index}
                index={index}
                transform={transform}
                expand={false}
              />
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
          <CarouselImage
            photo={currentStyle.photos[activePhotoIndex]}
            setIsModalOpen={setIsModalOpen}
          />

        </CarouselImageContainer>
      </CarouselLayout>
    </>
  );
}

export default Carousel;
