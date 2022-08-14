import { useState } from 'react';

export const useForceUpdate = () => {
  const [value, setValue] = useState(0);
  return () => {
    console.log('updating');
    setValue(value + 1), value;
  };
};
