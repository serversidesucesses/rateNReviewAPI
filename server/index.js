require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use('static', express.static(path.join(__dirname, '../client/dist')));

// Add routes here

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
