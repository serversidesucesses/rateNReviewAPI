import React from 'react';

export default function Photo({ photos }) {
  return (
    <div>
      <img src={photos.url} alt="imageOfLa" width="100" height="70" />
    </div>
  );
}
