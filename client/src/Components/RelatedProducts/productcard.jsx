import React from 'react';
import {CardContainer, ImageStyled, ProductInfoStyled} from '../Styles/RelatedProducts/related.styled.js';
import {AppContext} from '../../AppContext.jsx';

export default function ProductCard({product}) {
  const { setProductID } = useContext(AppContext);
  return (
    <CardContainerStyled onClick={() => setProductID(product.id)}>
      <ImageStyled src={product.photo_url}/>
      <ProductInfoStyled>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.default_price}</p>
      </ProductInfoStyled>
    </CardContainerStyled>
  );
}