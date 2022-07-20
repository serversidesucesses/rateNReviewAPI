import React from 'react';
import CharacteristicBar from './characteristicbar.jsx';
import {CharacterListStyled} from '../../Styles/Reviews/bars.styled.js';

export default function CharacteristicList({characteristics}) {
  return (
    <CharacterListStyled>
      {characteristics.map((value) => (
        <CharacteristicBar characteristic={value} key={value.id} />
      ))}
    </CharacterListStyled>
  );
}
