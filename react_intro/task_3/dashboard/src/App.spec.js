import {render, screen} from '@testing-library/react';
import App from './App';

test('renders 2 input elements', () => {
  render(<App />);
  const inputs = screen.getAllByRole('textbox');
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(inputs.length).toBe(1);
  expect(passwordInput).toBeInTheDocument();
})

test('renders 2 label elements: Email and Password', () => {
  render(<App />);
  const emailLabel = screen.getByLabelText(/email/i);
  const passwordLabel = screen.getByLabelText(/password/i);
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
})

test('renders a button with the text OK', () => {
  render (<App />);
  const button = screen.getByRole('button', { name: /ok/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('OK');
})