const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('¡Hola, Mundo desde Node.js!');
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
