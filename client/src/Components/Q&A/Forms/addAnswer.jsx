import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../../Styles/Q&A/form.styled.js'
import CloudinaryUploadWidget from '../../../Assets/cloudinaryUploadWidget.jsx';

const axios = require('axios');

const initialValues = {
  body: '',
  name: '',
  email: '',
};

export default function AddAnswer({ onFormValidation }) {
  const [values, setValues] = useState(initialValues);
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target[name], e.target.value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const imageUpload = (image) => {
    setImages((previmages) => [...previmages, image]);
  };

  function onSubmit(e) {
    e.preventDefault();
    const data = { values, images };
    onFormValidation(data);
  }

  return (
    <Form>
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
        </div>
      </form>
    </Form>
  );
}
