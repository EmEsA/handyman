import { createService } from './helpers';

const schema = {
  tableName: 'tariffs',
  fields: ['id', 'name'],
};
export const tariffsService = createService(schema);
