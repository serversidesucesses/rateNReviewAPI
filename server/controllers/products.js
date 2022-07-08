const axios = require('axios');
// need to require the .env file here

const getProductDetails = (productId) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`,
    headers: {
      // put the token inside the .env file once git cline this repo
      // Authorization:
    },
  };
  return axios(options);
};

// get product styles
const getProductStyles = (productId, callback) => {
  const options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`,
    headers: {
      // Authorization:
    }
  };
  axios(options)
    .then((data) => callback(data))
    .catch((err) => {
      // do something with the err
      console.log(err);
    });
};

// get items in cart
const addItemToCart = (skuId, callback) => {
  const params = { sku_id: skuId };
  const options = {
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
    data: params,
    headers: {
      //Authorization:
    },
  };
  axios(options)
    .then((data) => callback(data))
    .catch((err) => {
      // do something with err. console log for now
      console.log(err);
    });
};

module.exports = {
  getProductDetails,
  getProductStyles,
  addItemToCart
};
