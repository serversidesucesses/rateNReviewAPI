require('dotenv').config();
const axios = require('axios');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
axios.defaults.headers.common['Authorization'] = process.env.API_KEY;

exports.listReviews = (req, res) => {
  const {
    page,
    count,
    sort,
    product_id
  } = req.query;

  axios.get('/reviews', {
    params: {
      page,
      count,
      sort,
      product_id
    },
  })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
      console.log(err);
      return res.status(404).send(err)});
};

exports.getReviewMetadata = (req, res) => {
  const { product_id } = req.query;
  axios.get('/reviews/meta', {
    params: {
      product_id
    }
  })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(404).send(err));
};

exports.addReview = (req, res) => {
  axios.post('/reviews', { body: req.query })
    .then((response) => res.status(201).send(response))
    .catch((err) => res.status(404).send(err));
};

exports.reviewHelpful = (req, res) => {
  const { review_id } = req.query;
  console.log(review_id);
  axios.put(`/reviews/${review_id}/helpful`)
    .then((response) => res.status(204).send(response.statusText))
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
};

exports.reportReview = (req, res) => {
  const { review_id } = req.query;
  console.log(review_id);
  axios.put(`/reviews/${review_id}/report`)
    .then((response) => res.status(204).send(response.statusText))
    .catch((err) => res.status(404).send(err));
};