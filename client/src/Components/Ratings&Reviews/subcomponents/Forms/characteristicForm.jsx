import React from 'react';
import {CharacteristicRatingStyled, RadioButtonContainerStyled, RadioButtonStyled } from '../../../Styles/Reviews/bars.styled.js';

export default function CharacteristicForm({ characteristic, handleClick }) {
  return (
    <div>
      <p>{characteristic.name}</p>
      <CharacteristicRatingStyled>
        {[...Array(5)].map((value, index) => (
          <RadioButtonContainerStyled>
            <label htmlFor={`${characteristic.name}_${index}`}>{index + 1}</label>
            <RadioButtonStyled type="radio" id={`${characteristic.name}_${index}`} name={characteristic.id} value={index + 1} onClick={handleClick} required />
            {index + 1 === 1 ? <label htmlFor={`${characteristic.name}_${index}`}>{characteristic.descriptionOne}</label> : null}
            {index + 1 === 5 ? <label htmlFor={`${characteristic.name}_${index}`}>{characteristic.descriptionTwo}</label> : null}
          </RadioButtonContainerStyled>
        ))}
      </CharacteristicRatingStyled>
    </div>
  );
}
