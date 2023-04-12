import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders the counter with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText(/count:/i)).toHaveTextContent('Count: 0');
  });

  it('increments the count when the + button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    expect(getByText(/count:/i)).toHaveTextContent('Count: 1');
  });

  it('decrements the count when the - button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(getByText(/count:/i)).toHaveTextContent('Count: -1');
  });

//   it('reset the counter when it reaches 5', () => {
//     const { getByText } = render(<Counter />);
//     const incrementButton = getByText('Increment');
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     fireEvent.click(incrementButton);
//     expect(getByText(/count:/i)).toHaveTextContent('Count: 0');
//   });

// it('matches snapshot', () => {
//     const { asFragment } = render(<Counter />);
//     expect(asFragment()).toMatchSnapshot();
//   });
});
