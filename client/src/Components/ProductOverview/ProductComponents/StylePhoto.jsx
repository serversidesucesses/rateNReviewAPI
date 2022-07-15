import React, { useEffect, useState } from 'react';

export default function StylePhoto({ currentStyle, setCurrentStyle }) {

  // when a style is clicked, update currentStyle
  return (
    <div>
      <img src={currentStyle.photos[0].thumbnail_url} width="90" height="90" style={{borderRadius: '50%'}} onClick={() => (
        setCurrentStyle(currentStyle)
        )}/>
    </div>
  )
}
