import { render, screen, waitFor, getByText } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductMain from '../client/src/Components/ProductOverview/ProductMain.jsx';

const MockProductDetail = () => {
  return (
    <BrowserRouter>
      <ProductOverview />
    </BrowserRouter>
  )
}

describe("ProductDetail", () => {
  it('is able to render the ProductDetails component', async () => {
    await render(<MockProductDetail />)
    const productListDiv = await screen.findByTestId('product-item-test')
    expect(productListDiv).toBeInTheDocument();
  });
})
Footer
