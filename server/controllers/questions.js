require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
axios.defaults.headers.common['Authorization'] = process.env.Token;

//  Questions -----------------------------------------------------------

exports.get_questions = (req, res) => {
  const { product_id, page } = req.query;
  console.log(product_id)
  axios.get('/qa/questions/', {
    params: {
      product_id,
      page,
      count: 1000,
    },
  })
    .then((response) => {
      res.status(200).send(response.data.results);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.post_questions = (req, res) => {
  axios.post('/qa/questions', req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(400).send(err));
};

exports.put_questionHelpful = (req, res) => {
  const dataDir = path.join(__dirname, '../middleware/logger');
  const filepath = path.join(dataDir, `${req.session_id + req.query.question_id}.txt`);
  if (fs.existsSync(filepath) === true) {
    if (Number(fs.readFileSync(filepath, 'utf8')) > 1) {
      res.status(404).send('Already voted');
    } else {
      axios.put(`/qa/questions/${req.query.question_id}/helpful`)
        .then(() => {
          console.log('increment');
          res.sendStatus(204);
        })
        .catch(() => res.sendStatus(400));
    }
  }
};

exports.put_reportQ = (req, res) => {
  axios.put(`/qa/questions/${req.query.question_id}/report`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};

//  Answers -----------------------------------------------------------

exports.get_answers = (req, res) => {
  const { page, count } = req.query;
  axios.get(`/qa/questions/${req.query.question_id}/answers/`, {
    params: {
      page,
      count,
    },
  })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(400).send(err));
};

exports.post_answers = (req, res) => {
  axios.post(`/qa/questions/${req.query.question_id}/answers`, req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(400).send(err));
};

exports.put_answHelpful = (req, res) => {
  const dataDir = path.join(__dirname, '../middleware/logger');
  const filepath = path.join(dataDir, `${req.session_id + req.query.answer_id}.txt`);
  if (fs.existsSync(filepath) === true) {
    console.log('true');
    if (Number(fs.readFileSync(filepath, 'utf8')) > 1) {
      console.log('not icrement');
      res.status(404).send('Already voted');
    } else {
      console.log('false');
      axios.put(`/qa/answers/${req.query.answer_id}/helpful`)
        .then(() => res.sendStatus(204))
        .catch(() => res.sendStatus(404));
    }
  }
};

exports.put_reportA = (req, res) => {
  console.log(req.query.answer_id);
  axios.put(`/qa/answers/${req.query.answer_id}/report`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};
