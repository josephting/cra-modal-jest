import React from 'react';
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('renders the open button', () => {
  render(<App />);
  expect(screen.getByText(/open/i)).toBeInTheDocument();
})

test("opens the modal", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/open/i, { selector: 'button' }));
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});

test("closes the modal", async () => {
  render(<App />);
  fireEvent.click(screen.getByText(/open/i, { selector: 'button' }));
  const submitBtn = screen.getByText(/submit/i);
  fireEvent.click(screen.getByText(/submit/i, { selector: 'button' }));
  await waitForElementToBeRemoved(submitBtn);
});
