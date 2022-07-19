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
    setCurrPhotoMain(activePhotoIndex);
  };

  // const toggleExpandStatus = () => {
  //   setExpandStatus(!expandStatus);
  // };

  const onModalCloseRequest = () => {
    setIsModalOpen(false);
  };

  console.log('currentStylePhotos :', currentStylePhotos);
  console.log('currentStyle :', currentStyle);
  console.log('isModalOpen', isModalOpen);

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

          <CarouselThumbnailGrid id='carouselThumbnailGrid'>
            {/* here each photo is an object that contain url and thumbnail_url */}
            <ol>
              {currentStylePhotos.map((photo, index) => (
                <CarouselThumbnailImage
                  photo={photo} activePhotoIndex={activePhotoIndex}
                  handleClick={handleClick} index={index}
                  key={currentStyle.photos[index].url + index}
                  index={index}
                  expand={false}
                />
              ))}
            </ol>
          </CarouselThumbnailGrid>

        </CarouselThumbnailContainer>

        { leftButtonStatus
            ? (
              <CarouselButtonUp
                onClick={() => handleClick(activePhotoIndex - 1)}>
                <FaAngleUp />
              </CarouselButtonUp>
            )
            : null}

        {rightButtonStatus ? (
            <CarouselButtonDown onClick={() => handleClick(activePhotoIndex + 1)}>
              <FaAngleDown />
            </CarouselButtonDown>
          ) : null}


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
