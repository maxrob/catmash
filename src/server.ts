import dotenv from 'dotenv';
import app from './app';
import { connectDB } from './lib/mongoose';

dotenv.config();
const port: string = process.env.PORT || '3000';
connectDB();

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
