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
  MaginifiedImage,
} from './carousel.styled.js';

export default function ExpandedImageView({
  image, handleClick, activePhotoIndex, rightButtonStatus, leftButtonStatus, onCloseRequest,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(true);

  // height and width set the size of the magnifying window
  // zoomLevel set the zoom in power
  const magnifierHeight = 300;
  const magnifieWidth = 300;
  const zoomLevel = 2.5;
  console.log('image url is: ', image);

  console.log('this is magnifying status:', showMagnifier);
  return (
    <>
      {leftButtonStatus
        ? (
          <ExpandedCarouselButtonLeft
            zindex={102}
            onClick={() => handleClick(activePhotoIndex - 1)}
          >
            <FaAngleLeft />
          </ExpandedCarouselButtonLeft>
        )
        : null}

      {rightButtonStatus
        ? (
          <ExpandedCarouselButtonRight
            zindex={102}
            onClick={() => handleClick(activePhotoIndex + 1)}
          >
            <FaAngleRight />
          </ExpandedCarouselButtonRight>
        )
        : null}

      {showMagnifier
        ? (
          <ExpandedImageViewStyled>
            <ExpandedImage
              src={image}
              alt="hello"
              onClick={() => setShowMagnifier(!showMagnifier)}
              onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                console.log(width, height);
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
            />
          </ExpandedImageViewStyled>
        )
        : (
          <div style={
           {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            height: '100%',
            paddingTop: '30%',
            width: '100%',
            marginRigth: 0,
            zIndex: 103,
            overflow: 'scroll',
           }
          }
          >
            <MaginifiedImage
              object-fit="fill"
              zindex="104"
              src={image}
              onClick={() => setShowMagnifier(!showMagnifier)}
              height={`${0.95 * 2.5 * 100}%`}
              onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowMagnifier(true);
                console.log(width, height);
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
          </div>
        )}

      {/* below is the div for the magnifier glass. after working, need to move it to styled files */}

          <div
            style={{
              display: showMagnifier ? '' : 'none',
              position: 'absolute',
              zIndex: 105,
              // prevent magnifier blocks the mousemove event of img
              pointerEvents: 'none',
              // set size of magnifier
              height: `${magnifierHeight/2}px`,
              width: `${magnifieWidth/2}px`,
              // move element center to cursor pos
              top: `${y - magnifierHeight / 3}px`,
              left: `${x - magnifieWidth / 3}px`,
              opacity: '1', // reduce opacity so you can verify position
              border: '1px solid lightgray',
              backgroundColor: 'CornflowerBlue',
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',

              // calculate zoomed image size
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

              // calculate position of zoomed image.
              backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
            }}
          />


    </>
  );
}
