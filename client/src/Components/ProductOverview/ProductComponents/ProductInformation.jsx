import React, { useEffect, useState } from 'react';
import StylePhoto from './StylePhoto.jsx'
const axios = require ('axios');



export default function ProductInformation() {
  // numberOfReviews={this.props.numberOfReviews} productInfo={this.state.productInfo} allResultsArray={this.state.allResultsArray} currentStyleIndex={this.state.currentStyleIndex} avgRating = {this.props.avgRating}
  const [productName, setProductName] = useState('Placeholder Name');

  const [priceTag, setPriceTag] = useState('Placeholder Price');

  const [category, setCategory] = useState('Category');


  const getDataFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/productdetails',
      params: { id: productId },
    })
      .then((response) => {
        console.log(response.data.name);
        setProductName(response.data.name);
        setPriceTag(response.data.default_price)
      })
      .catch((error) => {
        console.log('Error in getting data from getDataFromProductId', error);
      });
  }

  useEffect(() => {
    // console.log('got to useEffect');
    getDataFromProductId(40344);
  }, [])

  return (
    <div className='productInformation'>
      {category}
      <br />
      {productName}
      <br />
      ${priceTag}
      {/* {ratings}
      <div className='categoryName'>{this.props.productInfo.category}</div>
      <div className='productName'><b>{this.props.productInfo.name.toUpperCase()}</b></div>
      <div className='priceTag'>{displayPrice}</div> */}
    </div>

  );
}


