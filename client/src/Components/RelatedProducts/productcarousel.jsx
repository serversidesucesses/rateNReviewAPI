import React from 'react';
import ProductCard from './productcard.jsx';
import { ProductsContainerStyled } from '../Styles/RelatedProducts/related.styled.js';

export default function ProductCarousel({products}) {
  return (
    <ProductsContainerStyled>
      {products.map((product) => <ProductCard product={product}/>)}
    </ProductsContainerStyled>
  );
}