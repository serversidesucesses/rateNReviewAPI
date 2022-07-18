import React, { useEffect } from 'react';

export default function CloudinaryUploadWidget({ imageUpload }) {
  // eslint-disable-next-line no-var
  var myWidget;

  useEffect(() => {
    // eslint-disable-next-line no-var
    myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'space-invaders',
        uploadPreset: 'Atelier-space-invaders',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          imageUpload(result.info.url);
        }
      },
    );
    document.getElementById('upload_widget').addEventListener(
      'click',
      () => {
        myWidget.open();
      },
      false,
    );
  }, []);

  return (
    <button type="button" id="upload_widget">
      Upload
    </button>
  );
}
