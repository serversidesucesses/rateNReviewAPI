import React, { useState, useEffect, createContext } from 'react';
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

  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  // height and width set the size of the magnifying window
  // zoomLevel set the zoom in power
  const magnifierHeight = 200;
  const magnifieWidth = 200;
  const zoomLevel = 2.5;
  console.log('image url is: ', image);

  return (
    <>
      {leftButtonStatus
        ? (
          <ExpandedCarouselButtonLeft
            zindex={1199999}
            onClick={() => handleClick(activePhotoIndex - 1)}
          >
            <FaAngleLeft />
          </ExpandedCarouselButtonLeft>
        )
        : null}

      {rightButtonStatus
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
        <ExpandedImage
          src={image}

          onMouseEnter={(e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            console.log(width, height)
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
            // calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            setShowMagnifier(false);
          }}
        />

        {/* below is the div for the magnifier glass. after working, need to move it to styled files */}
        <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          zIndex: 10,
          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "CornflowerBlue",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          cursor: pointer;
        }}
        ></div>

      </ExpandedImageViewStyled>
    </>
  );
}