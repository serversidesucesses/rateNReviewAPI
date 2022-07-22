import React, { useState, useEffect } from "react";
import axios from 'axios';
import { LogoCartGrid, LogoContainer, PromotionLineContainer } from '../../Styles/ProductOverview/productOverview.styled.js';

// the cart logo requires get request from cart
export default function Header() {
  return (
    <div>
      <LogoCartGrid>
        <LogoContainer>
        ATEILER
        </LogoContainer>
      </LogoCartGrid>

      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer>
    </div>
  )
}