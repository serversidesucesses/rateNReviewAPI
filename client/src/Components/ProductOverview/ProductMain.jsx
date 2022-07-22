import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
// import Header from './ProductComponents/Header.jsx';
import ProductDescription from './ProductComponents/ProductDescription.jsx';
import StyleSelector from './ProductComponents/StyleSelector.jsx';
import styled from 'styled-components';
import { ProductOverviewGrid, HeaderGrid, ProductDescriptionGrid, ProductInformationGrid, VerticalLine, BulletPointDescription } from '../Styles/ProductOverview/productOverview.styled.js'
import { AppContext } from '../../AppContext.jsx';

export const ThemeContext = React.createContext({});

export default function ProductMain({product_id}) {
  // const [productId, setProductId] = useState(40346);
  const [productDetails, setProductDetails] = useState({});
  const [productName, setProductName] = useState('Placeholder Name');
  const [categoryName, setCategoryName] = useState('CATEGORY');
  const [priceTag, setPriceTag] = useState('Placeholder Price');
  const { setName } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  const getDataFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/productdetails',
      params: { id: productId },
    })
      .then((response) => {
        //console.log(response.data.name);
        ReactDOM.unstable_batchedUpdates(() => {
          setProductDetails(response.data)
          setProductName(response.data.name);
          setCategoryName(response.data.category)
          setPriceTag(response.data.default_price);
          setName(response.data.name);
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.log('Error in getting data from getDataFromProductId', error);
      });
  }

  // when first load page, do axios call
  useEffect(() => {
    getDataFromProductId(product_id);
  }, []);

  // useEffect(() => {
  //   setName(productName);
  // }, [productName]);

  if (isLoading) {
    return null;
  }

  return (
    <ProductOverviewGrid>
      <HeaderGrid>
      </HeaderGrid>
      {/* StyleSelector contains style and carousel */}
      <StyleSelector productName={productName} categoryName={categoryName} priceTag={priceTag} product_id={product_id}/>
      {/* productinformation contains information, slogan and descirption */}
      <ProductInformationGrid>
        {/* <ProductInformation /> */}
        {/* {productCategory}
        {productName} */}
        <ProductDescription slogan={!isLoading ? productDetails.slogan : null} description={!isLoading ? productDetails.description : null} />
        <VerticalLine>
          <div></div>
        </VerticalLine>
        <BulletPointDescription>
          <div>
            100% organic material
          </div>
          <div>
            100% hand made
          </div>
          <div>
            100% size fit
          </div>
        </BulletPointDescription>
      </ProductInformationGrid>
    </ProductOverviewGrid>
  );
}
