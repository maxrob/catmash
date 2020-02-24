import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', error => console.error(error));
  db.once('open', () => console.log('connected to database'));
};

const disconnectDB = async () => {
  await mongoose.disconnect();
};

export { connectDB, disconnectDB };
