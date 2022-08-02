import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/erroHandler';
import RouterCar from './routes';

const app = express();
app.use(express.json());
app.use(RouterCar);
app.use(errorHandler);

export default app;
