import { estimatesService } from '../services/estimates-service';
import { createServiceHook } from './helpers';

export const useEstimates = createServiceHook(estimatesService);
