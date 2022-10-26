const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;
app.use(cors());

const data = require('./data/data.json');


app.get('/', (req, res) => {
  res.send('Hello Educanal Server Site !!')
})

app.get('/data', (req, res)=>{
  res.send(data);
})

app.get('/data/:id', (req, res)=>{
  const id = req.params.id;
  const selectedCourse = data.find(course=> course.id === id);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log(`Educanal Server Site Running on port ${port}`)
})