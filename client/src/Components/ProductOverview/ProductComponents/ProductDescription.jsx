import React from 'react';
import { SloganDescriptionContainer,SloganContainer, DescriptionContainer } from '../../Styles/ProductOverview/productInformation.styled.js';

export default function ProductDescription({ slogan, description }) {
  return (
    <SloganDescriptionContainer>
      <SloganContainer>
        {slogan}
      </SloganContainer>
      <DescriptionContainer>
        {description}
      </DescriptionContainer>
    </SloganDescriptionContainer>
  )
}