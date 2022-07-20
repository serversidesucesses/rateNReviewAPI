import React, { useRef, useEffect, useState } from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
import ExpandedImageView from '../../ProductOverview/ProductComponents/ExpandedImageView.jsx';
import CarouselThumbnailImage from '../../ProductOverview/ProductComponents/CarouselThumbnailImage.jsx';
import {
  ExpandedCarouselButtonRight,
  ExpandedCarouselButtonLeft,
  ExpandedcarouselThumbnailGrid,
  ExpandedCarouselThumbnailContainer,
} from '../../ProductOverview/ProductComponents/carousel.styled.js';
import ModalHeader from './ModalHeader.jsx';
import {
  ModalWrapperStyled,
  ModalBackgroundStyled,
  ModalInnerStyled,
  ModalContentStyled,
  CloseButtonStyled,
  CloseButtonExpandedStyled,
} from '../../Styles/Q&A/modal.styled';
import GlobalStyle from '../../Styles/globalstyle.styled';

// import { ExpandedImage } from '../../ProductOverview/ProductComponents/carousel.styled';

export default function Modal({
  isOpen,
  onCloseRequest,
  title,
  description,
  image,
  handleClick,
  currentStyle,
  currentStylePhotos,
  activePhotoIndex,
  rightButtonStatus,
  leftButtonStatus,
  children,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  }, []);

  function handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', handleKeyUp, false);
      },
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  function onClick(photoindex) {
    handleClick(photoindex);
  }

  if (!isOpen) {
    return null;
  }

  if (image !== undefined) {
    return (
      <>
        <GlobalStyle overflow="hidden" />
        <ModalWrapperStyled>
          <CloseButtonExpandedStyled type="button" onClick={onCloseRequest}>X</CloseButtonExpandedStyled>
          <ModalBackgroundStyled />
          <div id="modal" >

            <ExpandedImageView
              image={image}
              handleClick={onClick}
              activePhotoIndex={activePhotoIndex}
              rightButtonStatus={rightButtonStatus}
              leftButtonStatus={leftButtonStatus}
              onCloseRequest={onCloseRequest}
            />

            <ExpandedCarouselThumbnailContainer>
              <ExpandedcarouselThumbnailGrid id="ExpandedcarouselThumbnailGrid">
                {/* here each photo is an object that contain url and thumbnail_url */}
                {currentStylePhotos.map((photo, index) => (
                  <CarouselThumbnailImage
                    photo={photo}
                    activePhotoIndex={activePhotoIndex}
                    handleClick={handleClick}
                    index={index}
                    key={currentStyle.photos[index].url + index}
                    expand
                  />
                ))}
              </ExpandedcarouselThumbnailGrid>
            </ExpandedCarouselThumbnailContainer>
          </div>

        </ModalWrapperStyled>
      </>
    );
  }

  return (
    <>
      <GlobalStyle overflow="hidden" />
      <ModalWrapperStyled>
        <CloseButtonStyled type="button" onClick={onCloseRequest}>X</CloseButtonStyled>
        <ModalBackgroundStyled />

        <ModalInnerStyled>
          {(title !== undefined || description !== undefined)
            ? (
              <ModalHeader
                title={title}
                description={description}
                onClose={onCloseRequest}
              />
            )
            : null}
          <ModalContentStyled>{children}</ModalContentStyled>
        </ModalInnerStyled>
      </ModalWrapperStyled>
    </>
  );
}
