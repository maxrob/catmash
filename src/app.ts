import dotenv from 'dotenv';
import app from './server';

dotenv.config();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
