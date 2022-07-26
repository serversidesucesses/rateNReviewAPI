import React, { useState, useEffect } from 'react';
// import { Form } from '../../../Styles/Q&A/form.styled.js'
import CloudinaryUploadWidget from '../../../../Assets/cloudinaryUploadWidget.jsx';
import FormStarButton from './formstarbutton.jsx';
import CharacteristicForm from './characteristicForm.jsx';
import axios from 'axios';

const initialValues = {
  product_id: 0,
  rating: 1,
  summary: '',
  recommend: false,
  body: '',
  name: '',
  email: '',
  photos: [],
  characteristics: {},
};

export default function AddReview({ characteristics, product_id }) {
  const [values, setValues] = useState(initialValues);
  const [images, setImages] = useState([]);
  const [characteristicsObj, setCharacteristicsObj] = useState({});

  useEffect(() => {
    console.log('addReview')
    setValues({
      ...values,
      characteristics: characteristicsObj,
    });
  }, [characteristicsObj]);

  useEffect(() => {
    console.log('addReviewForm1')
    setValues({
      ...values,
      product_id,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log(name, e.target.value);
  };

  const handleRecommended = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: Boolean(value),
    });
    // console.log(name, e.target.value);
  };


  const handleRatingChange = (name) => (rating) => {
    // console.log(e.target[name], e.target.value);
    setValues({
      ...values,
      [name]: Number(rating),
    });
  };

  const handleCharChange = (e) => {
    const { name, value } = e.target;
    // console.log('name: ', name, 'value: ', value);
    // console.log(values);
    if (name) {
      setCharacteristicsObj({
        ...characteristicsObj,
        [name]: Number(value),
      });
    }
  };

  const imageUpload = (image) => {
    setImages((previmages) => [...previmages, image]);
  };

  function onSubmit(e) {
    e.preventDefault();
    const data = values;
    data.photos = images;
    axios.post('/reviews/addreview', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  const handleFocus = (e) => {

  }

  const characteristicReview = characteristics.map((value) => (
    <div className="text">
      <CharacteristicForm characteristic={value} handleClick={handleCharChange} />
    </div>
  ));

  return (
    <form onSubmit={onSubmit}>
      <div className="button">
        <FormStarButton onChange={handleRatingChange('rating')} />
      </div>
      <div className="recommended" onChange={handleRecommended}>
        <p>Do you recommend this product?</p>
        <input type="radio" id="rec" name="recommend" value required />
        <label htmlFor="rec">Yes</label><br/>
        <input type="radio" id="noRec" name="recommend" value={false} required />
        <label htmlFor="noRec">No</label><br/>
      </div>
      {characteristicReview}
      <div className="name">
        <input type="text" name="name" placeholder="Enter a name" maxLength="100" id="nameForm" value={values.name} onChange={handleInputChange} required />
        {values.name.length > 0 ? <label htmlFor="nameForm" style={{fontSize:"10px"}}>Characters Left: {100 - values.name.length}</label> : null}
      </div>
      <div className="email">
        <input type="email" name="email" placeholder="Enter an email" maxLength="60" value={values.email} onChange={handleInputChange} required />
        {values.email.length > 0 ? <label htmlFor="nameForm" style={{fontSize:"10px"}}>Characters Left: {60 - values.email.length}</label> : null}
      </div>
      <div className="text">
        <input type="text" name="summary" placeholder="Enter a summary..." maxLength="60" size="50" value={values.summary} onChange={handleInputChange} />
        {values.summary.length > 0 ? <label htmlFor="nameForm" style={{fontSize:"10px"}}>Characters Left: {60 - values.summary.length}</label> : null}
      </div>
      <div className="text">
        <input type="text" name="body" placeholder="Enter an review..." maxLength="1000" size="100" value={values.body} onChange={handleInputChange} required />
        {values.body.length > 0 ? <label htmlFor="nameForm" style={{fontSize:"10px"}}>Characters Left: {1000 - values.body.length}</label> : null}
      </div>
      <CloudinaryUploadWidget imageUpload={imageUpload} />
      <div>
        <input type="submit" value="Submit Review" />
        {/* <input type="button" value="close" onClick={() => setAddStatus(false)} /> */}
      </div>
    </form>
  );
}
