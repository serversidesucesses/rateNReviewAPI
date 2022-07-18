import React, { useState } from 'react';
// import { Form } from '../Styles/Q&A/form.styled';
// import CloudinaryUploadWidget from './cloudinaryUploadWidget.jsx';

const axios = require('axios');

const initialValues = {
  body: '',
  name: '',
  email: '',
};

export default function AddAnswer({setAddStatus, question_id}) {
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
    const data = { ...values, photos: images };
    axios.post('/questions/answers', data, {
      params: {
        question_id,
      },
    })
      .then(() => {
        console.log('created');
        setAddStatus(false);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Form>
      <h2>Submit an answer</h2>
      <form onSubmit={onSubmit}>
        <div claassName="text">
          <input type="text" name="body" placeholder="Enter an answer..." maxLength="1000" size="100" value={values.body} onChange={handleInputChange} required />
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
