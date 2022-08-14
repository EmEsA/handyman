import { useContext, useState } from 'react';

import { DbContext } from '../contexts/db-context';
import { servicesService } from '../services/db';

export const useServices = () => {
  const { db, markDbChanged } = useContext(DbContext);
  const [services, setServices] = useState([]);

  return {
    services,
    getServices: (
      query = {
        id: undefined,
        name: undefined,
        description: undefined,
        price: undefined,
      }
    ) => {
      servicesService.get(db, query, (_, { rows: { _array } }) => {
        setServices(_array);
      });
    },
    addService: (
      query = { name: undefined, description: undefined, price: undefined }
    ) => {
      servicesService.add(db, query, markDbChanged);
    },
    deleteService: (query = { id: undefined }) => {
      servicesService.delete(db, query, markDbChanged);
    },
    updateService: (
      query = {
        id: undefined,
        name: undefined,
        description: undefined,
        price: undefined,
      }
    ) => {
      servicesService.update(db, query, markDbChanged);
    },
  };
};
