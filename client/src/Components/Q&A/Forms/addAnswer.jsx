import React, { useState } from 'react';
<<<<<<< HEAD:client/src/Components/Q&A/addAnswer.jsx
// import { Form } from '../Styles/Q&A/form.styled';
// import CloudinaryUploadWidget from './cloudinaryUploadWidget.jsx';
=======
import { Form } from '../../styles/Q&A/form.styled.js'
import CloudinaryUploadWidget from '../cloudinaryUploadWidget.jsx';
>>>>>>> 338984b (incoming changes from main):client/src/Components/Q&A/Forms/addAnswer.jsx

const axios = require('axios');

const initialValues = {
  body: '',
  name: '',
  email: '',
};

export default function AddAnswer() {
  const [values, setValues] = useState(initialValues);
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(e.target[name], e.target.value);
  };

  const imageUpload = (image) => {
    setImages((previmages) => [...previmages, image]);
  };

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h2>Submit an answer</h2>
      <form onSubmit={onSubmit}>
        <div className="text">
          <input type="text" name="body" placeholder="Enter an answer..." maxLength="1000" size="100" value={values.body} onChange={handleInputChange} required />
        </div>
        <div className="name">
          <input type="text" name="name" placeholder="Enter a name" value={values.name} onChange={handleInputChange} />
        </div>
        <div className="email">
          <input type="email" name="email" placeholder="Enter an email" value={values.email} onChange={handleInputChange} />
        </div>
        <CloudinaryUploadWidget imageUpload={imageUpload} />
        <div>
          <input type="submit" value="Submit Answer" />
          {/* <input type="button" value="close" onClick={() => setAddStatus(false)} /> */}
        </div>
      </form>
    </Form>
  );
}
