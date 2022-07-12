require('dotenv').config();
const axios = require('axios');
// need to require the .env file here
// const url = `https://app-hrseei-api.herokuapp.com/api/fec2/hr-rfp`;
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;

exports.getProductDetails = (req, res) => {
  axios.get('/products/40344', {
    header: {
      Authorization: process.env.API_KEY
    },
  })
    .then((response) =>
      (
        res.status(200).send(response.data)
        // console.log(JSON.stringify(response.data))
      )
    )
    .catch((error) => {
      console.log('this is line 17 in products:', error);
      res.status(400).send(error);
    });
};

exports.getProductStyles = (req, res) => {
  //${req.query.product_id}
  axios.get(`/products/40344/styles`)
    .then(
      (response) => res.status(200).send(response.data))
    .catch((err) => {
      res.status(400).send(err);
    });
 };

exports.addToCart = (req, res) => {
  console.log(JSON.stringify(req.body));
  axios.post(`/cart`, req.body)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
      res.status(400).send(err);
    });
 };