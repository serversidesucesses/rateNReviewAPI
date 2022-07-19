import React, { useEffect, useState } from 'react';
import { StylePhotoContainer, StyleCheckmark, StylePhotoThumbnail } from './styleSelector.styled.js';
import { FaCheckCircle } from 'react-icons/fa';

export default function StylePhoto({ currentStyle, setCurrentStyle, index, setIndex, checkmarkStatus}) {


  // const [changeStyle, setChangeStyle] = useState(false);

  // useEffect(() => {
  //   setCheckmarkStatus(false);
  // }, [checkmarkStatus]);

  // when a style is clicked, update currentStyle in parent
  return (
    <div>
      {/* need to put a checkmark on currently selected style */}
      <StylePhotoContainer>
        {checkmarkStatus ? <FaCheckCircle/> : <FaCheckCircle style={{opacity: 0}}/>}
        <StylePhotoThumbnail src={currentStyle.photos[0].thumbnail_url} onClick={() => (
          setCurrentStyle(currentStyle),
          setIndex(index)
          )}></StylePhotoThumbnail>
      </StylePhotoContainer>
    </div>
  )
}
