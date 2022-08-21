import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/chicago/i);
  expect(linkElement).toBeInTheDocument();
});

test('foo', () => {
  window.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(
      {
        data: [
          {
            id: 123,
            title: "Saxon Vase",
            place_of_origin: "England",
          },
        ],
      }
    ),
  })) as jest.Mock;

  render(<App />);

  expect(window.fetch).toBeCalled();
});
