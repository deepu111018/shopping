import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/sededRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

mongoose.set('strictQuery', false);

const port = process.env.PORT || 5000;

mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
