import React, { useState, useEffect } from "react";
import axios from 'axios';
import { LogoCartGrid, LogoContainer, Logo, PromotionLineContainer } from '../../Styles/ProductOverview/productOverview.styled.js';

// the cart logo requires get request from cart
export default function Header() {

    // var keys = Object.keys(cartArray);
    // console.log('cartArray keys are: ', keys)

  return (
    <div>
      <LogoCartGrid>
        <LogoContainer>
          <Logo src={'https://assets.website-files.com/605cc588040aec365998583f/62a35a6307658f12830a9300_House-Beautiful-logo.png'} />
        </LogoContainer>
      </LogoCartGrid>

      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer>
    </div>
  )
}