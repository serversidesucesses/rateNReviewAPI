const router = require('express').Router();
const controllers = require('../controllers');

router.get('/questions', controllers.questions.get_questions);

router.post('/questions', controllers.questions.post_questions);

router.put('/questions/helpful', controllers.questions.put_questionHelpful);

router.put('/reportQ', controllers.questions.put_reportQ);

router.get('/answers', controllers.questions.get_answers);

router.post('/answers', controllers.questions.post_answers);

router.put('/answers/helpful', controllers.questions.put_answHelpful);

router.put('/reportA', controllers.questions.put_reportA);
module.exports = router;
