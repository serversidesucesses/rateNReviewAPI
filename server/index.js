require('dotenv').config();
const path = require('path');
const axios = require('axios');
const app = express();
const db = require('./db.js');

app.use(express.json());

app.use(cors());



app.get('/reviews', db.getReviewList);

app.get('/reviews/meta', db.getProductMetadata);

app.post('/reviews', db.addReview);

app.put('/reviews/:review_id/helpful', db.markReviewHelpful);

app.put('/reviews/:review_id/report', db.reportReview);


const PORT = process.env.PORT || 5432;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);

// MAYBE FOR LATER USE
// const expressStaticGzip = require("express-static-gzip");
// app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
  // const sessionHandler = require('./middleware/session-handler');
  // app.use(sessionHandler);
  // const compression = require('compression');
  // app.use(compression());
  // const logger = require('./middleware/logger');
  // // app.use(logger);
  //   enableBrotli: true