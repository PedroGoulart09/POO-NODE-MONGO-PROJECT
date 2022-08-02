import { Router } from 'express';
import CarModel from '../models/Car.model';
import CarController from '../controllers/Car.controller';
import CarService from '../services/Car.service';
import validateBody from '../middlewares/genericValidate';
import validId from '../middlewares/validateId';
import { mergedCar } from '../interfaces/ICar';

const routerCar = Router();

const modelCar = new CarModel();
const modelService = new CarService(modelCar);
const modelCarController = new CarController(modelService);

routerCar.post(
  '/', 
  validateBody(mergedCar),
  (req, res) => modelCarController.create(req, res),
);

routerCar.get(
  '/',
  (req, res) => modelCarController.read(req, res),
);

routerCar.get(
  '/:id', 
  validId,
  (req, res) => modelCarController.readOne(req, res),
);

routerCar.put(
  '/:id',
  validId,
  (req, res) => modelCarController.update(req, res),
);

routerCar.delete(
  '/:id', 
  validId,
  (req, res) => modelCarController.delete(req, res),
);

export default routerCar;