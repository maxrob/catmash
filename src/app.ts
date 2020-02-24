import express from 'express';
import dotenv from 'dotenv';
import { getCats, getCatsMashes, addCatPoint } from './controllers/cats';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to database'));

app.get('/cats', getCats);
app.get('/cats/mashes', getCatsMashes);
app.post('/cats/:id/add_point', addCatPoint);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
