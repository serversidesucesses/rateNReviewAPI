require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
})


/*CLIENT SIDE:

  return axios({
    method: 'get',
    url: '/reviews',
    params: {
      product_id,
      sort: sortOption,
      count: reviewCount,
    },
  });

*/

//query-params: page(1), count(5), sort(h/n/r), product_id
module.exports.getReviewList = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const count = parseInt(req.query.count) || 5;
  const sortOpt = req.query.sort;
  const prod_id = parseInt(req.query.product_id);

  SWITCH (sortOpt) {
    case('relevant'):
      var sort = 'r.date ASC, helpfulness ASC';
      break;
    case('newest'):
      var sort = 'r.date ASC';
      break;
    case('helpful'):
      var sort = 'helpfulness ASC';
      break;
  }

  // console.log('product id from controller products.js is:', req.query.id);
  pool.query(`SELECT (
    r.id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    url
  ) FROM reviews r INNER JOIN reviews_photos rp ON r.id = rp.review_id
    WHERE (r.product_id = ${prod_id})
    ORDER BY ${sort}
    LIMIT 10;`, [count, count*(page - 1)]))
    .then(({rows}) => res.status(200).json(rows))
    .catch(error => res.status(500).send('Internal Server Error'));
}

/*CLIENT SIDE:

axios({
  method: 'get',
  url: `/reviews/meta`,
  params: {
    product_id
  },
})

*/

  //param: product_id
module.exports.getProductMetadata = (req, res) => {
  //${req.query.product_id}
  axios.get(`/products/${req.query.id}/styles`)
    .then(
      (response) => {res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  };


/* CLIENT_SIDE:

  axios({
    method: 'put',
    url: `/reviews/${review.review_id}/helpful`,
  })

*/

  //param: product_id
  module.exports.addReview = (req, res) => {

  };

  module.exports.markReviewHelpful = (req, res) => {

  };

  module.exports.reportReview = (req, res) => {

  };