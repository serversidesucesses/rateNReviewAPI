import React from 'react';
import { SloganContainer, DescriptionContainer } from '../../Styles/ProductOverview/productInformation.styled.js';

export default function ProductDescription({ slogan, description }) {
  return (
    <div>
      <SloganContainer>
        {slogan}
      </SloganContainer>
      <DescriptionContainer>
        {description}
      </DescriptionContainer>
    </div>
  )
}