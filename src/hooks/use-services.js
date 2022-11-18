import { servicesService } from '../services/services-service';
import { createServiceHook } from './helpers';

export const useServices = createServiceHook(servicesService);
