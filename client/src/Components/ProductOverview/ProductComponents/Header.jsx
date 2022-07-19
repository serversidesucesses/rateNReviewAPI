import React, { useState, useEffect } from "react";
import axios from 'axios';
import { LogoCartGrid, LogoContainer, CartLogoContainer, PromotionLineContainer } from '../productOverview.styled.js';
import { FaShoppingCart } from 'react-icons/fa';

// the cart logo requires get request from cart
export default function Header() {
  const [cartArray, setCartArray] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)

  const handleGetFromBag = () => {
    axios.get('/products/getFromCart')
      .then((response) => {
        console.log('The information get from cart is: ', response.data)
        setCartArray(response.data);
      })
      .catch((error) => {
        console.log('Error getting cart data', error);
      });
      console.log(cartArray.length)
    }
    // var keys = Object.keys(cartArray);
    // console.log('cartArray keys are: ', keys)

  useEffect(() => {
    var count = 0;
    for (let i= 0; i < cartArray.length; i++) {
      // setTotalItemCount(totalItemCount + i.count);
      count += Number(cartArray[i].count);

    }
    setTotalItemCount(count);
  }, [cartArray])
  console.log('totalItemCount', totalItemCount)

  return (
    <div>
      <LogoCartGrid>
        <LogoContainer>LOGO</LogoContainer>
        <CartLogoContainer onClick={handleGetFromBag}>
          {totalItemCount}
          <FaShoppingCart />

        </CartLogoContainer>
      </LogoCartGrid>

      <PromotionLineContainer>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE/DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </PromotionLineContainer>
    </div>
  )
}