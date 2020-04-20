import express from 'express';
import { getCats, getCatsMashes, addCatPoint } from './controllers/cats';

const app = express();
app.get('/cats', getCats);
app.get('/cats/mashes', getCatsMashes);
app.post('/cats/:id/add_point', addCatPoint);

export default app;
