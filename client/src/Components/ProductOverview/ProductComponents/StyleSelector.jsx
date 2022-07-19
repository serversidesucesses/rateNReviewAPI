import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import StylePhoto from './StylePhoto.jsx';
import Carousel from './Carousel.jsx';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
import Share from './Share.jsx';
import {
  StyleSelectorLayout, StylePhotoGrid, PriceStyleContainer, CategoryNameContainer, CategoryContainer, ProductNameContainer, ShareGrid,
} from './styleSelector.styled.js';
import { ProductDescriptionGrid } from '../productOverview.styled.js';

export default function StyleSelector({ productName, categoryName, priceTag }) {
  const [productId, setProductId] = useState(40344);
  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ photos: [0], skus: {} });
  const [currentPrice, setCurrentPrice] = useState(priceTag);
  // const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
  const [checkmarkStatus, setCheckmarkStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getStyleFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/product/styles',
      params: { id: productId },
    })
      .then((response) => {
        console.log('all style from this productId is: ', response.data);
        setCurrentStyleArray(response.data.results);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });

  };
  console.log('currentStyle is:', currentStyle);

  // productId is default to 40345 right now
  useEffect(() => {
    getStyleFromProductId(productId);
  }, []);

  useEffect(() => {
    setCurrentPrice(currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price)

  }, [currentStyle]);

  return (
    <ProductDescriptionGrid id='productDescriptionGrid'>
      {/* above grid has 2fr 1fr, and I want Carousel to take up 2
      Carousel has too many style therefore has a seperate styling file */}
      <Carousel currentStyle={currentStyle} productId={productId} />
      {/* StyleSelectorLayout will take the other 1fr */}
      <StyleSelectorLayout id='styleSelectorLayout'>
        <CategoryNameContainer>
          <CategoryContainer>{categoryName}</CategoryContainer>
          <ProductNameContainer>{productName}</ProductNameContainer>
        </CategoryNameContainer>
        <PriceStyleContainer>
          $
          {currentPrice}
          <div>
            <b>STYLE </b>
            {' '}
            {currentStyle.name}
          </div>
        </PriceStyleContainer>
        <StylePhotoGrid>
          {currentStyleArray.map((style, index) => {
            console.log(currentIndex);
            console.log(index);
            return <StylePhoto
              key={style.photos[0].url + index}
              currentStyle={style}
              setCurrentStyle={setCurrentStyle}
              index={index}
              setIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
            }
          )}
        </StylePhotoGrid>

          {/* below component takes in current style, and need to access
          currentStyle.skus for the object that contain skus informaation */}
        <SizeQuantitySelector currentStyleSkus={currentStyle.skus} />

        <Share/>
      </StyleSelectorLayout>
    </ProductDescriptionGrid>
  );
  // }
}

