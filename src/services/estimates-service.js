import { createService } from './helpers';

const schema = {
  tableName: 'estimates',
  fields: ['id', 'dateEdited', 'phoneNumber', 'address', 'closed'],
};
export const estimatesService = createService(schema);
