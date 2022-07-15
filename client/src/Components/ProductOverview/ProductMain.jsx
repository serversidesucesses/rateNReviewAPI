import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import ProductDescription from './ProductComponents/ProductDescription.jsx';
import ProductInformation from './ProductComponents/ProductInformation.jsx';
import StyleSelector from './ProductComponents/StyleSelector.jsx';


export default function ProductMain() {

  // getProductDetail(productId) {
  //     axios({
  //       method: 'get',
  //       url: 'products/productdetails',
  //       data: { id: productId },
  //     })
  //       .catch((error) => {
  //         console.log('Error getting data at getDataFromProductId', error);
  //       });
  //   };


  return (
    <div>
      {/* StyleSelector contains style and carousel */}
      <StyleSelector />
      {/* productinformation contains information, slogan and descirption */}
      <ProductInformation  />

    </div>
  );
}
