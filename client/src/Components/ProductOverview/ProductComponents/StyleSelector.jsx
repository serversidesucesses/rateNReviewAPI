import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import StylePhoto from './StylePhoto.jsx';
import Carousel from './Carousel.jsx';
import SizeQuantitySelector from './SizeQuantitySelector.jsx';
import Share from './Share.jsx';
import {
  StyleSelectorLayout, StylePhotoGrid, RatingCartGrid, CartLogoContainer, PriceStyleContainer, CategoryNameContainer, CategoryContainer, ProductNameContainer, ShareGrid, RatingContainer
} from '../../Styles/ProductOverview/styleSelector.styled.js';
import { ProductDescriptionGrid } from '../../Styles/ProductOverview/productOverview.styled.js';
import { FaShoppingCart } from 'react-icons/fa';
import StarRating from '../../Ratings&Reviews/subcomponents/stars.jsx';
import { AppContext } from '../../../AppContext.jsx';

export default function StyleSelector({ productName, categoryName, priceTag, product_id }) {


  const [productId, setProductId] = useState(product_id);
  const [currentStyleArray, setCurrentStyleArray] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({ photos: [0], skus: {} });
  const [currentPrice, setCurrentPrice] = useState(priceTag);
  // const [currentStylePhotos, setCurrentStylePhotos] = useState([]);
  const [checkmarkStatus, setCheckmarkStatus] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartArray, setCartArray] = useState([])
  const [totalItemCount, setTotalItemCount] = useState(0)
  const [refreshState, setRefreshState] = useState(false);
  const context = useContext(AppContext);
  const { rating, countRatings } = context;

  // get data from /cart immediate when the page load
  useEffect(() => {
    axios.get('/products/getFromCart')
      .then((response) => {
        setCartArray(response.data);
      })
      .catch((error) => {
        console.log('Error getting cart data', error);
      });
  }, [refreshState])


    useEffect(() => {
      var count = 0;
      for (let i= 0; i < cartArray.length; i++) {
        // setTotalItemCount(totalItemCount + i.count);
        count += Number(cartArray[i].count);

      }
      setTotalItemCount(count);
    }, [cartArray])

    // productId is default to 40345 right now
    useEffect(() => {
      getStyleFromProductId(productId);
    }, []);

  const getStyleFromProductId = (productId) => {
    axios({
      method: 'get',
      url: '/products/product/styles',
      params: { id: productId },
    })
      .then((response) => {
        setCurrentStyleArray(response.data.results);
        setCurrentStyle(response.data.results[0]);
        setRefreshState(!refreshState);
      })
      .catch((error) => {
        console.log('Error in getting data from getStyleFromProductId', error);
      });

  };

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
        <RatingCartGrid>
          <RatingContainer>
            <a href="#review">
              <StarRating review_id={productId + 'starOverview'} rating={rating} />
              <span style={{cursor:'pointer'}}>{countRatings} Reviews</span>
            </a>
            <StarRating review_id={productId + 'starOverview'} rating={rating} />
            <span style={{cursor:'pointer'}}>{countRatings} Reviews</span>
          </RatingContainer>
          <CartLogoContainer onClick={() => {setRefreshState(!refreshState)}}>
            {totalItemCount}
            <FaShoppingCart />
          </CartLogoContainer>
        </RatingCartGrid>
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
        <SizeQuantitySelector currentStyleSkus={currentStyle.skus} refreshState={refreshState} setRefreshState={setRefreshState}/>

        <Share/>
      </StyleSelectorLayout>
    </ProductDescriptionGrid>
  );
  // }
}

