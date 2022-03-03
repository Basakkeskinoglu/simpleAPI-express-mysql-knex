const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knexfile');
const app = express();
const router=require('./api/routes/router.js');
app.use(bodyParser.json());
app.use(router);
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})