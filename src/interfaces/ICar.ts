import { z } from 'zod';
import { IVehicle, vehicleZodSchema } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

const mergedCar = carZodSchema.merge(vehicleZodSchema);

type ICar = z.infer<typeof mergedCar> & IVehicle;
export { ICar, mergedCar };