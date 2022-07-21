import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StyleSelector from '../client/src/Components/ProductOverview/ProductComponents/StyleSelector.jsx';

{/* <StyleSelector productName={productName} categoryName={categoryName} priceTag={priceTag}/> */}

const testingProduct = {
  productName: 'This is a testing product name',
  categoryName: 'This is a testing category name',
  priceTag: '999.99'
}

describe('ProductDescription', () => {
  it('display product description that includes slogan', () => {
    render(
      <StyleSelector
        productName={testingProduct.productName}
        categoryName={testingProduct.categoryName}
        priceTag={testingProduct.priceTag}
      />
    );
    const productNameTesting = screen.getByText(testingProduct.productName);
    const categoryNameTesting = screen.getByText(testingProduct.categoryName);
    const priceTagTesting = screen.getByTest(testingProduct.priceTag)
    expect(productName).toBeInTheDocument();
    expect(categoryName).toBeInTheDocument();
    expect(priceTag).toBeInTheDocument();

  });

})