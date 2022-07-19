require('dotenv').config();
const axios = require('axios');
// need to require the .env file here
// const url = `https://app-hrseei-api.herokuapp.com/api/fec2/hr-rfp`;
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
axios.defaults.headers.common['Authorization'] = process.env.Token;

exports.getProductDetails = (req, res) => {
  console.log('product id from controller products.js is:', req.query.id);
  axios.get(`/products/${req.query.id}`)
    .then((response) =>
      (
        res.status(200).send(response.data)
        // console.log(JSON.stringify(response.data))
      )
    )
    .catch((error) => {
      //console.log(error);
      res.status(400).send(error);
    });
}

exports.getProductStyles = (req, res) => {
  //${req.query.product_id}
  axios.get(`/products/${req.query.id}/styles`)
    .then(
      (response) => {res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  };

  exports.getFromCart = (req, res) => {
   axios.get(`/cart`)
     .then((response) => res.status(200).send(response.data))
     .catch((error) => {
       res.status(400).send(error);
     });
  };

  exports.addToCart = (req, res) => {
    console.log('req.body is: ', req.body);
    axios.post('/cart', req.body)
      .then((response) => res.status(201).send(response.data))
      .catch((error) => {
        console.log('error is: ', error)
        res.status(400).send(error);
      });
   };
