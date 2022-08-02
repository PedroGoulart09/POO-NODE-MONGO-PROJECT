import { Router } from 'express';
import routerCar from './car.route';

const route = Router();

route.use('/cars', routerCar);

export default route;
