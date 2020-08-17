const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World, Sam and Eddie in the house!'));

app.listen(port, () => console.log('Starting'));
