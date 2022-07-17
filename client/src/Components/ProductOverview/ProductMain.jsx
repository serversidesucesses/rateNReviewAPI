import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductDescription from './ProductComponents/ProductDescription.jsx';
import StyleSelector from './ProductComponents/StyleSelector.jsx';
import styled from 'styled-components';
import { ProductOverviewGrid, ProductDescriptionGrid, ProductInformationGrid, VerticalLine, BulletPointDescription } from './productOverview.styled.js'

export const ThemeContext = React.createContext({});

export default function ProductMain() {
  const [productId, setProductId] = useState(40348);
  const [productDetails, setProductDetails] = useState({});
  const [productName, setProductName] = useState('Placeholder Name');
  const [categoryName, setCategorName] = useState('CATEGORY');
  const [priceTag, setPriceTag] = useState('Placeholder Price');

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

  // console.log('productdetails from ProductInformation is:', productDetails)

  // when first load page, do axios call
  useEffect(() => {
    // console.log('got to useEffect');
    getDataFromProductId(productId);
  }, [])


  return (
    <ProductOverviewGrid>
      {/* <ThemeContext.Provider value={[categoryName, productName]}> */}
      {/* StyleSelector contains style and carousel */}
      <StyleSelector productName={productName} categoryName={categoryName} />
      {/* </ThemeContext.Provider> */}
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
