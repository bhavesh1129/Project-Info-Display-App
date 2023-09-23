// Import necessary dependencies and configure environment variables
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Define a function to establish a connection to the MongoDB database
const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;
    try {
        // Attempt to connect to the MongoDB database
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default connectDB;
