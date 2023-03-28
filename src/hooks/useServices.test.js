import React from 'react';
import { useService } from './useServices';
import { getService } from '../services';
import { render } from '@testing-library/react';

jest.mock('../services', () => ({
  getService: jest.fn(),
}));

describe('useService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the current instance of the service', () => {
    const mockedServiceInstance = { /* mocked instance */ };
    getService.mockReturnValueOnce(mockedServiceInstance);

    const TestComponent = () => {
      const service = useService('TestService');
      expect(service).toBe(mockedServiceInstance);
      return null;
    };

    render(<TestComponent />);
    expect(getService).toHaveBeenCalledWith('TestService');
  });
});