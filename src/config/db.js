import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  const mongoUri = process.env.LOCAL_MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB connection successful');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw err;
  }
};
