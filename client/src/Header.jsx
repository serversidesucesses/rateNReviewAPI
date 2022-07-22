import React, { useState, useEffect } from "react";
import axios from 'axios';
import { LogoContainer, LogoText, HeaderClick, HeaderGrid, HeaderButtonContainer, HeaderSearchContainer, HeaderSearch } from './Components/Styles/header.styled.js';
import logo from './Assets/tshirt.png';

// the cart logo requires get request from cart
export default function Header() {
  return (
    <HeaderGrid>
      <LogoContainer>
      <LogoText>
        Atelier
      </LogoText>
      </LogoContainer>
      <HeaderButtonContainer>
        <HeaderClick>Products</HeaderClick>
        <HeaderClick>About</HeaderClick>
        <HeaderClick>Contact Us</HeaderClick>
      </HeaderButtonContainer>
      <HeaderSearchContainer>
        <HeaderSearch>
          ___________ Search
        </HeaderSearch>
      </HeaderSearchContainer>
    </HeaderGrid>
  )
}