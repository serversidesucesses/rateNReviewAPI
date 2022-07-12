const express = require('express');

const router = express.Router();

const {
  listReviews,
  getReviewMetadata,
  addReview,
  reviewHelpful,
  reportReview,
} = require('../controllers/reviews');

router.get('/reviews', listReviews);
router.get('/reviews/meta', getReviewMetadata);
router.post('/addreview', addReview);
router.put('/mark/helpful', reviewHelpful);
router.put('/mark/report', reportReview);

module.exports = router;
