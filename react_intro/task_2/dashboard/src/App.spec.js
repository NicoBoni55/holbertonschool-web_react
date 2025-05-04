import {render, screen} from '@testing-library/react';
import App from './App';

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("h1 is rendered", () => {
    const h1 = screen.getByRole("heading", { name: /School Dashboard/i });
    expect(h1).toBeInTheDocument();
  });

  test("text content in p is correct", () => {
    const p1 = screen.getByText(/Login to access the full dashboard/i);
    const footer = screen.getByText(/Copyright 2025 - Holberton School/i);
    expect(p1).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test("img is rendered", () => {
    const img = screen.getByAltText(/holberton logo/i);
    expect(img).toBeInTheDocument();
  });

  test("renders input elements", () => {
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBeGreaterThanOrEqual(1);
  });

  test("renders label elements: Email and Password", () => {
    const emailLabel = screen.getByLabelText(/Email/i);
    const passwordLabel = screen.getByLabelText(/Password/i);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test("renders a button with the text OK", () => {
    const button = screen.getByRole("button", { name: /OK/i });
    expect(button).toBeInTheDocument();
  });
});