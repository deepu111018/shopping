import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/sededRouter.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
