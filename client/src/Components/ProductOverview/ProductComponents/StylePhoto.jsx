import React from 'react';
import { StylePhotoContainer, StyleCheckmark, StylePhotoThumbnail } from '../../Styles/ProductOverview/styleSelector.styled.js';
import { FaCheck } from 'react-icons/fa';

export default function StylePhoto({ currentStyle, setCurrentStyle, currentIndex, index, setIndex, checkmarkStatus}) {


  const handleClick = () => {
    setIndex(index);
    setCurrentStyle(currentStyle);
  }

  // when a style is clicked, update currentStyle in parent
  return (
    <div>
      {/* need to put a checkmark on currently selected style */}
      <StylePhotoContainer>
        {/* {index === currentIndex ? <FaCheck/> : <FaCheck style={{opacity: 0}}/>} */}
        {index === currentIndex ? <StylePhotoThumbnail src={currentStyle.photos[0].thumbnail_url} style={{border: '4px solid #FF9900'}} onClick={handleClick}/> : <StylePhotoThumbnail src={currentStyle.photos[0].thumbnail_url} onClick={handleClick} style={{margin: '4px'}}/>}
      </StylePhotoContainer>
    </div>
  )
}
