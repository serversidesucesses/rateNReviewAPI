import React, { useState } from 'react';
import { PhotoEnlargeStyled } from '../Components/Styles/Q&A/photo.styled';

export default function Photo({ photos }) {
  const [state, setState] = useState(true);

  return (
    <div>
      { state ? <img src={photos.url} alt="imageOfLa" width="100" height="70" onClick={() => setState(false)} />
        : <PhotoEnlargeStyled src={photos.url} alt="imageOfLa" onClick={() => setState(true)} />}
    </div>
  );
}
