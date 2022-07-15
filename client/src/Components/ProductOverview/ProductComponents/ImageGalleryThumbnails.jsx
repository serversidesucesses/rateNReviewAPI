import React, { useEffect, useState } from 'react';

export default function ImageGalleryThumbnails({ currentStylePhoto }) {
  return (
    <div >
      <img src={currentStylePhoto.thumbnail_url} width="90" height="90" />
    </div>
  )
}
