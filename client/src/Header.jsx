import React, { useState, useEffect } from "react";
import axios from 'axios';
import { HeaderContainer, Nav } from './Components/Styles/header.styled.js';
import logo from './Assets/tshirt.png';

// the cart logo requires get request from cart
export default function Header() {

    // var keys = Object.keys(cartArray);
    // console.log('cartArray keys are: ', keys)

  return (
    <div>
        <HeaderContainer>
          {/* <Logo src={'https://assets.website-files.com/605cc588040aec365998583f/62a35a6307658f12830a9300_House-Beautiful-logo.png'} /> */}
          {/* <img src={logo} style={{width: '40px'}}/> */}
          <a href="" id="logo" style={{display: 'flex', justifyContent: 'center'}}>
            <img src={logo} style={{width: '40px'}}/>
            Atelier
          </a>
          <Nav>
            <ul>
              <li>
                <a href="/home">Products</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Nav>
        </HeaderContainer>
{/*
      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer> */}
    </div>
  )
}