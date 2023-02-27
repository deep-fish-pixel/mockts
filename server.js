const express = require('express');
const path    = require('path');
const { mockServer } = require('./lib/bundle.cjs');

const app = express();

app.use(mockServer({
  prefix: '/api',
  rootPath: "../mock"
}));

app.use(express.static(path.join(__dirname, 'lib')));
app.listen(3000);
