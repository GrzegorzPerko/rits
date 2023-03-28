import React from 'react';
import { render, screen } from '@testing-library/react';
import Snackbar from './Snackbar';

describe('Snackbar component', () => {
  test('renders message', () => {
    const message = 'This is a test message';
    render(<Snackbar message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});