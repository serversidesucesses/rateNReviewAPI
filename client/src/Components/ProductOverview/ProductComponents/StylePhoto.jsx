import React, { useEffect, useState } from 'react';

export default function StylePhoto({ photos }) {

  // when a style is clicked, need to link the current price to the current style
  const [currentPrice, setCurrentPrice] = useState(0);

  return (
    <div>
      <img src={photos.thumbnail_url} width="90" height="90" style={{borderRadius: '50%'}} onClick={() => (setCurrentPrice(1))}/>
    </div>
  )
}
