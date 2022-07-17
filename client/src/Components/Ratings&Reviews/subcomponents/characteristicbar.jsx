import React from 'react';
import { CharacterBar, CharacterBarContainer, CharacteristicContainer, Icon, CharacterDescription, CharacterName } from '../../styles/Reviews/bars.styled';
import Arrow from '../assets/down.png';

export default function CharacteristicBar({ characteristic }) {
  console.log('line 6 characteristics', characteristic);
  return (
    <CharacteristicContainer>
      <CharacterName>{characteristic.name}</CharacterName>
      <CharacterBarContainer>
        <CharacterBar></CharacterBar>
        <CharacterBar></CharacterBar>
        <CharacterBar></CharacterBar>
        <Icon style={{left: `${characteristic.percent}%`}} src={Arrow} />
      </CharacterBarContainer>
      <CharacterDescription style={{ gridColumn: '1/2', justifySelf: 'start' }}>
        {characteristic.descriptionOne}
      </CharacterDescription>
      <CharacterDescription style={{ gridColumn: '3/4', justifySelf: 'end' }}>
        {characteristic.descriptionTwo}
      </CharacterDescription>
    </CharacteristicContainer>
  );
}
