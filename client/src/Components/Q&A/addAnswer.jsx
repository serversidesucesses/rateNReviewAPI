import React, { useState } from 'react';
import Form from '../styles/Q&A/form.styled.js'
import CloudinaryUploadWidget from './cloudinaryUploadWidget.jsx'

const initialValues = {
  answer: '',
  name: '',
  email: '',
};

export default function AddAnswer({setAddStatus}) {
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
    console.log(values);
    setAddStatus(false);
  }
  console.log(images);
  return (
    <Form>
      <h2>Submit an answer</h2>
      <form onSubmit={onSubmit}>
        <div claassName="text">
          <input type="text" name="answer" placeholder="Enter an answer..." maxLength="1000" size="100" value={values.answer} onChange={handleInputChange} required />
        </div>
        <div claassName="name">
          <input type="text" name="name" placeholder="Enter a name" value={values.name} onChange={handleInputChange} />
        </div>
        <div claassName="email">
          <input type="email" name="email" placeholder="Enter an email" value={values.email} onChange={handleInputChange} />
        </div>
        <CloudinaryUploadWidget imageUpload={imageUpload} />
        <div>
          <input type="submit" value="Submit Answer" />
          <input type="button" value="close" onClick={() => setAddStatus(false)} />
        </div>
      </form>
    </Form>
  );
}
