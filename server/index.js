require('dotenv').config();

const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// all routes go to router folder index.js
app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
