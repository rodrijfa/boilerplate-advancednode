'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

/* FCC testing MUST be first */
fccTesting(app);

/* TEMPLATE ENGINE — EXACT STRING MATCH */
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/views/pug');

/* MIDDLEWARE */
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* HOME ROUTE */
app.get('/', (req, res) => {
  res.render('index');
});

/* SERVER */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
