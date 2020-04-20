import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB: () => any = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db: any = mongoose.connection;
  db.on('error', error => console.error(error));
  db.once('open', () => console.log('connected to database'));
};

const disconnectDB: () => any = async () => {
  await mongoose.disconnect();
};

export { connectDB, disconnectDB };
