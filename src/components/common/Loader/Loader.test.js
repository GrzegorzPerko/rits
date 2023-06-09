import React from 'react';
import { render,  } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
  it('renders without errors', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('.spinner-container')).toBeInTheDocument();
    expect(container.querySelector('.loading-spinner')).toBeInTheDocument();
  });
});