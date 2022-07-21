import React, { useState } from 'react';
import {
  FormStyled,
  PersonalInfoStyled,
  LabelStyled,
  HeadingStyled,
  BodyStyled,
  ButtonsStyled,
} from '../../Styles/Q&A/form.styled.js';

export default function AddQuestion({ onFormValidation }) {
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    onFormValidation(values);
  }

  return (

    <form onSubmit={onSubmit}>
      <BodyStyled>
        <LabelStyled>
          <span>Your Question *</span>
          <input type="text" name="body" placeholder="Enter your Question" maxLength="1000" size="100" value={values.body} onChange={handleInputChange} required />
        </LabelStyled>
      </BodyStyled>
      <PersonalInfoStyled>
        <div className="name">
          <LabelStyled>
            <span>What is your nickname *</span>
            <input type="text" name="name" placeholder="Example: jackson11!" maxLength="60" value={values.name} onChange={handleInputChange} required />
          </LabelStyled>
          <p>For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="email">
          <LabelStyled>
            <span>Your email *</span>
            <input type="email" name="email" placeholder="Why did you like the product or not?" value={values.email} onChange={handleInputChange} />
          </LabelStyled>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
      </PersonalInfoStyled>
      <ButtonsStyled>
        <input type="submit" value="Submit Question" />
        <input type="button" value="close" onClick={() => setAddStatus(false)} />
      </ButtonsStyled>
    </form>
  );
}
