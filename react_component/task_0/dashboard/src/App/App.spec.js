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
});

test('isLoggedIn is false and render Login component', () => {
  render(<App isLoggedIn={false} />);
  const loginElement1 = screen.getByPlaceholderText(/Email/i);
  const loginElement2 = screen.getByPlaceholderText(/Password/i);
  expect(loginElement1).toBeInTheDocument();
  expect(loginElement2).toBeInTheDocument();
});

test('isLoggedIn is true and render CourseList component', () => {
  render(<App isLoggedIn={true}/>);
  const courseElement = screen.getByText(/Available courses/i);
  expect(courseElement).toBeInTheDocument();
});