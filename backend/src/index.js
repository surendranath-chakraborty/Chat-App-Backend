// src/index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Default to '*' if not set
  credentials: true,
}));
app.use(express.json());
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET || 'default_secret', // Default value for development
  resave: false,
  saveUninitialized: true,
}));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chat-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Add your routes and other configurations here

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
  res.send('hey SAayan');
});

});
