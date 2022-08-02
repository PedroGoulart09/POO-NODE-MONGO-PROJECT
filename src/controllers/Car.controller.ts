import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request & { body:ICar }, res: Response<ICar>) {
    const { buyValue, color, doorsQty,
      model, seatsQty, status, year } = req.body;
    const car = { buyValue, color, doorsQty, model, seatsQty, status, year };
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }

  async read(_req: Request, res:Response<ICar[] | null>) {
    const getCar = await this._service.read();
    return res.status(200).json(getCar);
  }

  async readOne(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const findOneCar = await this._service.readOne(id);
    return res.status(200).json(findOneCar);
  }

  async update(req: Request, res: Response<ICar | null>) {
    const { buyValue, color, doorsQty,
      model, seatsQty, status, year } = req.body;
    const { id } = req.params;
    const car = { buyValue, color, doorsQty, model, seatsQty, status, year };
    const resultUpdate = await this._service.update(id, car);
    return res.status(200).json(resultUpdate);
  }

  async delete(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const deleteCar = await this._service.delete(id);
    return res.status(204).json(deleteCar);
  }
}