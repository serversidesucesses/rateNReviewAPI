import React, { useState, useEffect } from "react";
import axios from 'axios';
import { LogoCartGrid, LogoContainer, PromotionLineContainer } from '../productOverview.styled.js';

// the cart logo requires get request from cart
export default function Header() {

    // var keys = Object.keys(cartArray);
    // console.log('cartArray keys are: ', keys)

  return (
    <div>
      <LogoCartGrid>
        <LogoContainer>LOGO</LogoContainer>
      </LogoCartGrid>

      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer>
    </div>
  )
}