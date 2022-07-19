import React from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';
import {
  ExpandedImage,
  ExpandedCarouselButtonRight,
  ExpandedCarouselButtonLeft,
  ExpandedImageViewStyled,
} from './carousel.styled.js';

export default function ExpandedImageView({ image, handleClick, activePhotoIndex, rightButtonStatus, leftButtonStatus, onCloseRequest }) {
  return (
    <>
      { leftButtonStatus
        ? (
          <ExpandedCarouselButtonLeft
            zindex={1199999}
            onClick={() => handleClick(activePhotoIndex - 1)}
          >
            <FaAngleLeft />
          </ExpandedCarouselButtonLeft>
        )
        : null}

      { rightButtonStatus
        ? (
          <ExpandedCarouselButtonRight
            zindex={1199999}
            onClick={() => handleClick(activePhotoIndex + 1)}
          >
            <FaAngleRight />
          </ExpandedCarouselButtonRight>
        )
        : null}
      <ExpandedImageViewStyled onClick={onCloseRequest}></ExpandedImageViewStyled>
      <ExpandedImageViewStyled>
        <ExpandedImage src={image} />
      </ExpandedImageViewStyled>
    </>
  );
}