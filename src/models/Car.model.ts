import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './Generic.model';

const carsMongoSchema = new Schema<ICar>({
  doorsQty: Number,
  seatsQty: Number,
});

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('cars', carsMongoSchema)) {
    super(model);
  }
}

export default CarsModel;