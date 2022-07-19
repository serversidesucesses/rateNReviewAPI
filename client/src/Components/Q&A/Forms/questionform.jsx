import React, { useState } from 'react';
import {
  Form, PersonalInfo, Label, Heading, Body, Buttons,
} from '../../styles/Q&A/form.styled.js';

export default function AddAnswer({ onFormValidation }) {
  const initialValues = {
    body: '',
    name: '',
    email: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(values);
    onFormValidation(values);
  }

  return (

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
  );
}
