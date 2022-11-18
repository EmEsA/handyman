import { createService } from './helpers';

const schema = {
  tableName: 'categories',
  fields: ['id', 'name', 'tariffId'],
};

export const categoriesService = createService(schema);
