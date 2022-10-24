const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello Educanal Server !!')
})

app.listen(port, () => {
  console.log(`Educanal Server Site Running on port ${port}`)
})