import express from 'express';
import dotenv from 'dotenv'
import {getCatsFights, addCatPoint} from './controllers/cats'

dotenv.config()

const app = express();
const port = process.env.SERVER_PORT || 3000;
app.get('/cats/fights', getCatsFights);
app.post('/cats/:id/add_point', addCatPoint);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
