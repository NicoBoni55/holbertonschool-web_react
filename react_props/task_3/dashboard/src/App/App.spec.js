import {render, screen} from '@testing-library/react';
import App from './App';

test ('renders all components', () => {
  render(<App />);
  const h1 = screen.getByText('School Dashboard');
  const p1 = screen.getByText('Login to access the full dashboard');
  const footer = screen.getByText(/Copyright 2025 - Holberton School/i);
  const img = screen.getByAltText('holberton logo');
  expect(h1).toBeInTheDocument();
  expect(p1).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
  expect(img).toBeInTheDocument();
})