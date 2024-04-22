// index.js

const express = require('express');
const app = express();
const port = 3000;

// Route to add two numbers
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
