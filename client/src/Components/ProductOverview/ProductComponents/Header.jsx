import React from 'react';
import { LogoCartGrid, LogoContainer, CartLogoContainer, PromotionLineContainer } from '../productOverview.styled.js';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
      <LogoCartGrid>
        <LogoContainer>LOGO</LogoContainer>
        <CartLogoContainer><FaShoppingCart /></CartLogoContainer>
      </LogoCartGrid>

      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer>
    </div>
  )
}