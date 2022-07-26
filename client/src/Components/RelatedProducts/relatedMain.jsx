import React, {useState, useEffect, useContext} from 'react';
import ProductCarousel from './productcarousel.jsx';
import axios from 'axios';
import {AppContext} from '../../AppContext.jsx';

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);
  const { productID } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    axios({
      method: 'get',
      url: `/products/${productID}/related`
    })
      .then((response) => {
        let data = response.data;
        return Promise.all(data.map((product) => {
          return axios.get(`/products/${product.id}`)
            .then((response) => {
              return {
                category: response.data.category,
                description: response.data.description,
                default_price: response.data.default_price,
                photo_url: response.data.photos[0] ? response.data.photos[0].thumbnail_url : null,
                id: response.data.id,
              }
            })
            .catch((err) => console.log(err))
        }))
      })
      .then((ProductData) => {
        setProducts(ProductData);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ProductCarousel products={products} />
    </div>
  );
}