import React, { useState, useEffect } from "react";
import axios from 'axios';
import { HeaderContainer, Nav } from './Components/Styles/header.styled.js';
import logo from './Assets/tshirt.png';

// the cart logo requires get request from cart
export default function Header() {
  return (
    <div>
        <HeaderContainer>
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
    </div>
  )
}