import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without errors', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('should render Header, Content and Footer components', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render HomePage component inside Content', () => {
    render(<App />);
    const content = screen.getByTestId('content');
    expect(content).toContainElement(screen.getByTestId('home-page'));
  });
});