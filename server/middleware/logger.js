// const fs = require('fs');
// const path = require('path');

// module.exports = (req, res, next) => {
//   if (req.method === 'PUT' && Object.prototype.hasOwnProperty.call(req.query, 'question_id')) {
//     const dataDir = path.join(__dirname, 'logger');
//     const filepath = path.join(dataDir, `${req.session_id + req.query.question_id}.txt`);

//     if (fs.existsSync(filepath) === true) {
//       const log = fs.readFileSync(filepath, 'utf8');
//       const data = (Number(log) + 1).toString();
//       fs.writeFileSync(filepath, data);
//     } else {
//       fs.writeFileSync(filepath, '1');
//     }
//     //if file is empty enter 1 else increment number
//     console.log('file was created with name', req.session_id + req.query.question_id);
//   } else if (req.method === 'PUT' && Object.prototype.hasOwnProperty.call(req.query, 'answer_id')) {
//     const dataDir = path.join(__dirname, 'logger');
//     const filepath = path.join(dataDir, `${req.session_id + req.query.answer_id}.txt`);

//     if (fs.existsSync(filepath) === true) {
//       const log = fs.readFileSync(filepath, 'utf8');
//       const data = (Number(log) + 1).toString();
//       fs.writeFileSync(filepath, data);
//     } else {
//       fs.writeFileSync(filepath, '1');
//     }
//     //if file is empty enter 1 else increment number
//     console.log('file was created with name', req.session_id + req.query.answer_id);
//   }
//   next();
// };
