import { categoriesService } from '../services/categories-service';
import { createServiceHook } from './helpers';

export const useCategories = createServiceHook(categoriesService);
