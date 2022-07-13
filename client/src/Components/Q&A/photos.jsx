import React from 'react';

export default function Photos({ photos }) {
  return (
    <div>
      <img src={photos.url} alt="imageOfLa" width="80" height="80" />
    </div>
  );
}
