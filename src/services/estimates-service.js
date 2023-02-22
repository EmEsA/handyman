import { createService } from './helpers';

const schema = {
  tableName: 'estimates',
  fields: ['id', 'dateEdited', 'phoneNumber', 'address', 'closed', 'services'],
};
export const estimatesService = createService(schema);
