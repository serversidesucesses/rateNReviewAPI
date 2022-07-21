import React from 'react';
import { CharacterBarStyled, CharacterBarContainerStyled, CharacteristicContainerStyled, IconStyled, CharacterDescriptionStyled, CharacterName } from '../../Styles/Reviews/bars.styled';
import Arrow from '../assets/down.png';

export default function CharacteristicBar({ characteristic }) {
  return (
    <CharacteristicContainerStyled>
      <CharacterName>{characteristic.name}</CharacterName>
      <CharacterBarContainerStyled>
        <CharacterBarStyled />
        <CharacterBarStyled />
        <CharacterBarStyled />
        <IconStyled style={{ left: `${characteristic.percent}%` }} src={Arrow} />
      </CharacterBarContainerStyled>
      <CharacterDescriptionStyled style={{ gridColumn: '1/3', justifySelf: 'start' }}>
        {characteristic.descriptionOne}
      </CharacterDescriptionStyled>
      <CharacterDescriptionStyled style={{ gridColumn: '3/4', justifySelf: 'end' }}>
        {characteristic.descriptionTwo}
      </CharacterDescriptionStyled>
    </CharacteristicContainerStyled>
  );
}
