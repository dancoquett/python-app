import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('renders the initial count', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Current count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  it('increments the count when the increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Current count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  it('decrements the count when the decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /Decrement/i });
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Current count: -1/i);
    expect(countElement).toBeInTheDocument();
  });
});