import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SizeQuantitySelector from '../client/src/Components/ProductOverview/ProductComponents/SizeQuantitySelector.jsx';

const testRefreshState = {
  refreshState: true
}
const testStyleData = {
  skus: {
    1394817: {
      quantity: 8,
      size: 'XS',
    },
    1394818: {
      quantity: 16,
      size: 'S',
    },
    1394819: {
      quantity: 17,
      size: 'M',
    },
    1394820: {
      quantity: 10,
      size: 'L',
    },
    1394821: {
      quantity: 15,
      size: 'XL',
    },
    1394822: {
      quantity: 6,
      size: 'XXL',
    },
  },
};

it('should show an error message when pressing add to cart without having chosen a size', () => {
  render(<SizeQuantitySelector
    style={styleAllInStock}
  />);
  const addToCartButton = screen.getByText('Add to Cart');
  fireEvent(
    addToCartButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  const option = screen.getByText('XL');
  const errorMsg = screen.getByText('please select a size');
  expect(option).toBeInTheDocument();
  expect(errorMsg).toBeInTheDocument();
});