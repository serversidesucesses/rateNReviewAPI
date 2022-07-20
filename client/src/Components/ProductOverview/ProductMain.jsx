import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './ProductComponents/Header.jsx';
import ProductDescription from './ProductComponents/ProductDescription.jsx';
import StyleSelector from './ProductComponents/StyleSelector.jsx';
import styled from 'styled-components';
import { ProductOverviewGrid, HeaderGrid, ProductDescriptionGrid, ProductInformationGrid, VerticalLine, BulletPointDescription } from './productOverview.styled.js'
import { AppContext } from '../../AppContext.jsx';

export const ThemeContext = React.createContext({});

export default function ProductMain() {
  const [productId, setProductId] = useState(40346);
  const [productDetails, setProductDetails] = useState({});
  const [productName, setProductName] = useState('Placeholder Name');
  const [categoryName, setCategorName] = useState('CATEGORY');
  const [priceTag, setPriceTag] = useState('Placeholder Price');
  const { setName } = useContext(AppContext);

  const getDataFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/productdetails',
      params: { id: productId },
    })
      .then((response) => {
        //console.log(response.data.name);
        setProductDetails(response.data)
        setProductName(response.data.name);
        setPriceTag(response.data.default_price);
      })
      .catch((error) => {
        console.log('Error in getting data from getDataFromProductId', error);
      });
  }

  // console.log('productdetails from ProductMain is:', productDetails)

  // const getTotalCartItem = (currentStyle)

  // when first load page, do axios call
  useEffect(() => {
    // console.log('got to useEffect');
    getDataFromProductId(productId);
  }, []);

  useEffect(() => {
    // console.log('got to useEffect');
    setName(productName);
  }, [productName]);

  return (
    <ProductOverviewGrid>
      <HeaderGrid>
        <Header />
      </HeaderGrid>
      {/* StyleSelector contains style and carousel */}
      <StyleSelector productName={productName} categoryName={categoryName} priceTag={priceTag}/>
      {/* productinformation contains information, slogan and descirption */}
      <ProductInformationGrid>
        {/* <ProductInformation /> */}
        {/* {productCategory}
        {productName} */}
        <ProductDescription slogan={productDetails.slogan} description={productDetails.description} />

        <VerticalLine>
          <div></div>
        </VerticalLine>

        <BulletPointDescription>
          <div>
            100% organic material
          </div>
          <div>
            Make up line 2
          </div>
        </BulletPointDescription>
      </ProductInformationGrid>
    </ProductOverviewGrid>
  );
}
