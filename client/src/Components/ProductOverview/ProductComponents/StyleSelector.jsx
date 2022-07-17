import React, { useEffect, useState, useContext } from 'react';

// import files
import StylePhoto from './StylePhoto.jsx';
import Carousel from './Carousel.jsx';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
// import styles
import { StyleSelectorLayout, StylePhotoGrid, PriceStyleContainer, SizeQtyContainer, CategoryNameContainer } from './styleSelector.styled.js';
import { ProductDescriptionGrid } from '../productOverview.styled.js'

const axios = require('axios');

export default function StyleSelector({ productName, categoryName }) {
  const [productId, setProductId] = useState(40347);
  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({photos: [0], skus: {}});
  const [currentStylePhotos, setCurrentStylePhotos] = useState([]);

  const getStyleFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/product/styles',
      params: { id: productId },
    })
      .then((response) => {
        console.log('all style from this productId is: ', response.data)
        setCurrentStyleArray(response.data.results);
        setCurrentStyle(response.data.results[0]);
      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });
  }
  console.log('currentStyle is:',  currentStyle);

  // productId is default to 40345 right now
  useEffect(() => {
    getStyleFromProductId(productId);
  }, [])

    return (
      <ProductDescriptionGrid>
        {/* above grid has 2fr 1fr, and I want Carousel to take up 2
        Carousel has too many style therefore has a seperate styling file */}

        <Carousel currentStyle={ currentStyle } productId={productId}/>

        {/* StyleSelectorLayout will take the other 1fr */}
        <StyleSelectorLayout>
          <CategoryNameContainer>
          {categoryName}
          {productName}
          </CategoryNameContainer>
          <PriceStyleContainer>
            ${currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price}
            <div><b>STYLE </b>▸ {currentStyle.name}</div>
          </PriceStyleContainer>
          <StylePhotoGrid>
            {currentStyleArray.map((style, index) => {
              return (
                <StylePhoto key={style.photos[0].url + index} currentStyle={style} setCurrentStyle={setCurrentStyle}/>
              )
            })}
          </StylePhotoGrid>
          <SizeQtyContainer>
            {/* below component takes in current style, and need to access
            currentStyle.skus for the object that contain skus informaation */}
            <SizeQuantitySelector currentStyleSkus={ currentStyle.skus }/>
          </SizeQtyContainer>
        </StyleSelectorLayout>
      </ProductDescriptionGrid>
    )
  // }

}
