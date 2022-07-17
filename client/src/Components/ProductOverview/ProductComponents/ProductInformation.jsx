import React, { useEffect, useState, createContext } from 'react';
import { ProductInformationContainer, CategoryContainer, ProductNameContainer, ProductDescriptionContainer } from './productInformation.styled.js'
import { CategoryNameContainer } from './styleSelector.styled.js'
import ProductDescription from './ProductDescription.jsx'
const axios = require ('axios');

// export const productName = React.createContext();
// export const productCategory = React.createContext();

export default function ProductInformation() {
  // // numberOfReviews={this.props.numberOfReviews} productInfo={this.state.productInfo} allResultsArray={this.state.allResultsArray} currentStyleIndex={this.state.currentStyleIndex} avgRating = {this.props.avgRating}
  // const [productId, setProductId] = useState(40348);
  // const [productDetails, setProductDetails] = useState({});
  // const [productName, setProductName] = useState('Placeholder Name');
  // const [priceTag, setPriceTag] = useState('Placeholder Price');
  // const [productCategory, setCategory] = useState('Category');

  // const getDataFromProductId = (productId) => {
  //   axios({
  //     method: 'get',
  //     url: '/products/productdetails',
  //     params: { id: productId },
  //   })
  //     .then((response) => {
  //       //console.log(response.data.name);
  //       setProductDetails(response.data)
  //       setProductName(response.data.name);
  //       setPriceTag(response.data.default_price);
  //     })
  //     .catch((error) => {
  //       console.log('Error in getting data from getDataFromProductId', error);
  //     });
  // }

  // console.log('productdetails from ProductInformation is:', productDetails)

  // // when first load page, do axios call
  // useEffect(() => {
  //   // console.log('got to useEffect');
  //   getDataFromProductId(productId);
  // }, [])

  // console.log('Product slogan is: ', productDetails.slogan);
  // console.log('Product description is: ', productDetails.description);


  return (
    <>
      <CategoryNameContainer >
        <CategoryContainer>
          {categoryName}
        </CategoryContainer>
        <ProductNameContainer>
          {productName}
        </ProductNameContainer>
      </CategoryNameContainer>

      <ProductDescriptionContainer>
        <ProductDescription slogan={productDetails.slogan} description={productDetails.description}/>
      </ProductDescriptionContainer>
    </>
  );
}


