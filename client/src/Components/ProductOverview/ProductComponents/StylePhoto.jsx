import React, { useEffect, useState } from 'react';
import { StylePhotoThumbnail } from './styleSelector.styled.js';

export default function StylePhoto({ currentStyle, setCurrentStyle }) {

  // when a style is clicked, update currentStyle
  return (
    <div>
      <StylePhotoThumbnail src={currentStyle.photos[0].thumbnail_url} onClick={() => (
        setCurrentStyle(currentStyle)
        )}/>
    </div>
  )
}
