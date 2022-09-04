import { tariffsService } from '../services/tariffs-service';
import { createServiceHook } from './helpers';

export const useTariffs = createServiceHook(tariffsService);
