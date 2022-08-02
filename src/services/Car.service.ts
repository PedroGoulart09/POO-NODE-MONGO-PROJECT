import { IService } from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { ICar } from '../interfaces/ICar';

export default class CarService implements IService<ICar> {
  private _car:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._car = model;
  }
  async read(): Promise<ICar[] | null> {
    const readCar = await this._car.read();
    return readCar;
  }

  async readOne(_id: string): Promise<ICar | null> {
    const readOneAll = await this._car.readOne(_id);
    if (!readOneAll) throw new Error('Object not found');
    return readOneAll;
  }

  async update(_id: string, obj: ICar): Promise<ICar | null> {
    const updateCar = await this._car.update(_id, obj);
    if (!updateCar) throw new Error('Object not found');
    return updateCar;
  }
  
  async delete(_id: string): Promise<ICar | null> {
    const deleteCar = await this._car.delete(_id);
    if (!deleteCar) throw new Error('EntityNotFound');
    return deleteCar;
  }

  async create(obj:ICar):Promise<ICar> {
    return this._car.create(obj);
  }
}