// __tests__/PhotoList.test.js
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from ".."

afterEach(cleanup)

const mockOnClose = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

describe('Modal is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockOnClose}/>);
  });

  it('snapshot', () => {
    const { asFragment } = 
      render(<Modal currentPhoto={currentPhoto} onClose={mockOnClose}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockOnClose}
      currentPhoto={currentPhoto}
    />);
    fireEvent.click(getByText('Close this modal'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  })
})