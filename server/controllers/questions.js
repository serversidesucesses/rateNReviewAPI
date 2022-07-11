require('dotenv').config();
const axios = require('axios');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
axios.defaults.headers.common['Authorization'] = process.env.Token;

//  Questions -----------------------------------------------------------

exports.get_questions = (req, res) => {
  axios.get(`/qa/questions/?product_id=${req.query.product_id}&
  ${req.query.page !== undefined ? `page=${req.query.page}` : null}
  ${req.query.page !== null && req.query.count !== undefined ? `&count=${req.query.count}` : `count=${req.query.count}`}`)
    .then((response) => {
      res.status(200).send(response.data);
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
  axios.put(`/qa/questions/${req.query.question_id}/helpful`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};

exports.put_reportQ = (req, res) => {
  axios.put(`/qa/questions/${req.query.question_id}/report`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};

//  Answers -----------------------------------------------------------

exports.get_answers = (req, res) => {
  axios.get(`/qa/questions/${req.query.question_id}/answers/?
  ${req.query.page !== undefined ? `page=${req.query.page}` : null}
  ${req.query.page !== null && req.query.count !== undefined ? `&count=${req.query.count}` : `count=${req.query.count}`}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(400).send(err));
};

exports.post_answers = (req, res) => {
  axios.post(`/qa/questions/${req.query.question_id}/answers`, req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(400).send(err));
};

exports.put_answHelpful = (req, res) => {
  axios.put(`/qa/answers/${req.query.answer_id}/helpful`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};

exports.put_reportA = (req, res) => {
  axios.put(`/qa/answers/${req.query.answer_id}/report`)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
};
