const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))


require('./controller/db')();
require('./startup/routes')(app);

app.set('view engine', 'ejs');
app.use(express.static('./public'))

console.log(`app: ${app.get('env')}`);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;

// Look up Express - Advanced Topics - Mosh
// Look up Templating Engines
// Node.js & Express From Scratch [Part 3] - Pug Template Engine
// Node JS Tutorial for Beginners #25 - Template Engines
// Authenticate 
// Admin User (CRUD)
// User (Read, Update)