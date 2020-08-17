const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect('mongodb://mongo:27017/test');

app.get('/', (req, res) => res.send('Hello World, Sam and Eddie in the house!'));

app.listen(port, () => console.log('Starting'));
