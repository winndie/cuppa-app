import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './state';

test('Lemon Tea', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByText(/Lemon Tea/i)
  expect(linkElement).toBeInTheDocument();
})

test('Coffee', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByText(/Coffee/i)
  expect(linkElement).toBeInTheDocument();
})

test('Chocolate', () => {
  render(<Provider store={store}><App /></Provider>)
  const linkElement = screen.getByText(/Chocolate/i)
  expect(linkElement).toBeInTheDocument();
})
