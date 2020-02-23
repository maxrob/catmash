import express from 'express';
import dotenv from 'dotenv'

const app = express();
const port = process.env.SERVER_PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
