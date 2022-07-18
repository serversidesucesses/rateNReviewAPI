import React, { useState } from 'react';
import { Form, PersonalInfo, Label, Heading, Body, Buttons } from '../styles/Q&A/form.styled.js';
const axios = require('axios');

export default function AddAnswer({ product_id, setAddStatus }) {
  const initialValues = {
    body: '',
    name: '',
    email: '',
    product_id: product_id,
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(e.target[name], e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(values);
    axios.post('questions/questions', values)
      .then(() => setAddStatus(false))
      .catch((error) => console.log(error));
  }

  return (
    <Form>
      <Heading>
        <h2>Ask Your Question</h2>
        <h3>About the product {'Need product Name'}</h3>
      </Heading>
      <form onSubmit={onSubmit}>
       <Body>
          <Label>
            <span>Your Question *</span>
            <input type="text" name="body" placeholder="Enter your Question" maxLength="1000" size="100" value={values.body} onChange={handleInputChange} required />
          </Label>
        </Body>
        <PersonalInfo>
        <div claassName="name">
          <Label>
            <span>What is your nickname *</span>
            <input type="text" name="name" placeholder="Example: jackson11!" maxLength="60" value={values.name} onChange={handleInputChange} required />
          </Label>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        <div claassName="email">
          <Label>
            <span>Your email *</span>
            <input type="email" name="email" placeholder="Why did you like the product or not?" value={values.email} onChange={handleInputChange} />
          </Label>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
        </PersonalInfo>
        <Buttons>
          <input type="submit" value="Submit Question" />
          <input type="button" value="close" onClick={() => setAddStatus(false)} />
        </Buttons>
      </form>
    </Form>
  );
}
