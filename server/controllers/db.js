require('dotenv').config();
const { Pool } = require('pg');

import _ from 'underscore';

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

  pool.query(`WITH photos as (
    SELECT review_id, json_agg(json_build_object('id', rp.id, 'url', url)) from reviews_photos rp JOIN
    reviews r ON r.id = rp.review_id
    where product_id = ${prod_id}
    GROUP by review_id
  ), revs AS
  ( SELECT
    r.id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness
    FROM reviews r
    WHERE (r.product_id = ${prod_id} AND reported = false)
    ORDER BY helpfulness
    LIMIT 10
  ) SELECT * from revs left join photos on (photos.review_id = revs.id)`, [count, count*(page - 1)])
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
  const prod_id = parseInt(req.query.product_id);

  //DUPLICATES, BUT CALCULATES AVG OF EACH NAME CHAR BY PRODUCT
  pool.query(`WITH chars AS (
    SELECT c.id, c.name, avg(value) as average
    FROM characteristics c JOIN characteristic_reviews cr
    ON c.id = cr.characteristic_id
    WHERE product_id = ${prod_id} GROUP BY product_id, c.name, c.id
  ), rats as (
    select rating, count(rating) FROM reviews
    WHERE product_id = ${prod_id} group by rating
    ORDER BY rating asc
  ), stripped as (
    SELECT json_build_object(
      1, (SELECT (count) from rats where rating = 1),
      2, (SELECT (count) from rats where rating = 2),
      3, (SELECT (count) from rats where rating = 3),
      4, (SELECT (count) from rats where rating = 4),
      5, (SELECT (count) from rats where rating = 5)
    )
  ), cha as (
    SELECT json_build_object(
      'Comfort',  json_build_object(
        'id', (SELECT id from chars where name = 'Comfort'),
        'value', (SELECT average from chars where name = 'Comfort')
      ),
      'Fit',  json_build_object(
        'id', (SELECT id from chars where name = 'Fit'),
        'value', (SELECT average from chars where name = 'Fit')
      ),
      'Length',  json_build_object(
        'id', (SELECT id from chars where name = 'Length'),
        'value', (SELECT average from chars where name = 'Length')
      ),
      'Quality',  json_build_object(
        'id', (SELECT id from chars where name = 'Quality'),
        'value', (SELECT average from chars where name = 'Quality')
      )
    )
  ), rec as (
    SELECT json_build_object(
    0, (SELECT count(recommend) from reviews where recommend = 'false' and product_id = ${prod_id} ),
    1, (SELECT count(recommend) from reviews where recommend = 'true' and product_id = ${prod_id} )
    )
  ) SELECT json_build_object(
    'Ratings', (select * from stripped),
    'Recommend', (select * from rec),
    'Characteristics', (select * from cha)
  )`)
    .then(({rows}) => res.status(200).json(rows))
    .catch(error => res.status(500).send('Internal Server Error'));
}

/* CLIENT_SIDE:

  axios({
    method: 'put',
    url: `/reviews/${review.review_id}/helpful`,
  })

*/
  //param: product_id
module.exports.addReview = (req, res) => {
  const {product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.query;



  //post chars to char_review table
  pool.query(`INSERT INTO reviews (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email) VALUES (${product_id}, ${rating}, trunc(extract(epoch from now())*1000), ${summary}, ${body}, ${recommend}, FALSE, ${name}, ${email})
  RETURNING id;`)
    .then(({id}) =>
      _.each(characteristics, ((val, key, list) =>
      pool.query(`INSERT INTO characteristic_reviews (characteristic_id, review_id, value)
      VALUES (${key}, ${id}, ${val})`)
      ))
    )
  //char table

  //review table

  //photos table


};



  // ( /reviews/:review_id/helpful )
module.exports.markReviewHelpful = (req, res) => {
  const rev_id = parseInt(req.query.review_id);

  pool.query(
    `UPDATE reviews r
    SET helpfulness = helpfulness + 1
    WHERE id = ${rev_id}
    RETURNING helpfulness;`
  )
    .then(({num}) => res.status(200).json(num))
    .catch(error => res.status(500).send('Internal Server Error'));
};

// ( /reviews/:review_id/report )
module.exports.reportReview = (req, res) => {
  const rev_id = parseInt(req.query.review_id);

  pool.query(
    `UPDATE reviews r
    SET helpfulness = helpfulness + 1
    WHERE id = ${rev_id}
    RETURNING helpfulness;`
  )
    .then(({num}) => res.status(200).json(num))
    .catch(error => res.status(500).send('Internal Server Error'));

};