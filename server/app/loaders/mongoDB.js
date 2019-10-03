import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  const conn = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  return conn.connection.db;
};
