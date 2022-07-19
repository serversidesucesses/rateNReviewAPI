import React, { useEffect, useState } from 'react';
import { StylePhotoContainer, StyleCheckmark, StylePhotoThumbnail } from './styleSelector.styled.js';
import { FaCheck } from 'react-icons/fa';

export default function StylePhoto({ currentStyle, setCurrentStyle, currentIndex, index, setIndex, checkmarkStatus}) {


  const handleClick = () => {
    setIndex(index);
    setCurrentStyle(currentStyle);
  }
  // const [changeStyle, setChangeStyle] = useState(false);

  // useEffect(() => {
  //   setCheckmarkStatus(false);
  // }, [checkmarkStatus]);
  console.log('checkmarkstatus', checkmarkStatus, ' ' , 'index:', index);
  // when a style is clicked, update currentStyle in parent
  return (
    <div>
      {/* need to put a checkmark on currently selected style */}
      <StylePhotoContainer>
        {index === currentIndex ? <FaCheck/> : <FaCheck style={{opacity: 0}}/>}
        <StylePhotoThumbnail src={currentStyle.photos[0].thumbnail_url} onClick={handleClick}></StylePhotoThumbnail>
      </StylePhotoContainer>
    </div>
  )
}
