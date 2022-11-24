import { createService } from './helpers';

const schema = {
  tableName: 'services',
  fields: ['id', 'categoryId', 'name', 'price', 'unit'],
};
export const servicesService = createService(schema);
