import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('the text content within the 2 p elements in the app-body and app-footer divs matches', () => {
  render(<Login />);
  const divbody = screen.getByText(/Login to access the full dashboard/i);

  expect(divbody).toBeInTheDocument();
});

test('renders 2 input elements', () => {
  render(<Login />);
  const labelemail = screen.getByLabelText(/Email/i);
  const labelpassword = screen.getByLabelText(/Password/i);

  expect(labelemail).toBeInTheDocument();
  expect(labelpassword).toBeInTheDocument();
});

test('renders 2 label elements with the text Email and Password', () => {
  render(<Login />);
  const labelemail = screen.getByLabelText(/email/i);
  const labelpassword = screen.getByLabelText(/password/i);

  expect(labelemail).toBeInTheDocument();
  expect(labelpassword).toBeInTheDocument();
});

test('renders a button with the text OK', () => {
  render(<Login />);
  const button = screen.getByRole('button', { name: /ok/i });

  expect(button).toBeInTheDocument();
});

test('button is disabled by default', () => {
  render(<Login />);
  const button = screen.getByRole('button', { name: /ok/i });

  expect(button).toBeDisabled();
});

test('button is enabled when email and password are valid', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const button = screen.getByRole('button', { name: /ok/i });

  fireEvent.change(emailInput, { target: { value: ''}});
  fireEvent.change(passwordInput, { target: { value: '' }});
  expect(button).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'hola' }});
  fireEvent.change(passwordInput, { target: { value: '12345678' }});
  expect(button).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'example@gmail.com' }});
  fireEvent.change(passwordInput, { target: { value: '1234' }});
  expect(button).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'example@gmail.com' }});
  fireEvent.change(passwordInput, { target: { value: '12345678' }});
  expect(button).toBeEnabled();
});