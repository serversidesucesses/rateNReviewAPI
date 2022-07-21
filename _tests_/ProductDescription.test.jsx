import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductDescription from '../client/src/Components/ProductOverview/ProductComponents/ProductDescription.jsx';

const testingProduct = {
  slogan: 'This is a testing slogan from ProductDescription.test.jsx',
  description: 'This is a testing description from ProductDescription.test.jsx'
}

describe('ProductDescription', () => {
  it('display product description that includes slogan', () => {
    render(
      <ProductDescription
        slogan={testingProduct.slogan}
        description={testingProduct.description}
      />
    );
    const sloganTesting = screen.getByText(testingProduct.slogan);
    const descriptionTesting = screen.getByText(testingProduct.description);
    expect(sloganTesting).toBeInTheDocument();
    expect(descriptionTesting).toBeInTheDocument();
  });

})