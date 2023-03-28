import React from 'react';
import { getService } from '../services';

export const useService = (Service) => {
  const { current } = React.useRef(getService(Service));
  return current;
};
