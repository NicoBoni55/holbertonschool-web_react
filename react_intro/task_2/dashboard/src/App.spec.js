import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('h1 is redered', () => {
        render(<App />);
        const h1 = screen.getByText('School Dashboard');
        expect(h1).toBeInTheDocument();
    })

    it('text content in p is correct', () => {
        render(<App />);
        const p1 = screen.getByText('Login to access the full dashboard');
        const footer = screen.getByText(/Copyright 2025 - Holberton School/i);
        expect(p1).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    })

    it('img is rendered', () => {
        render(<App />);
        const img = screen.getByAltText('holberton logo');
        expect(img).toBeInTheDocument();
    })
})

describe ('login form', () => {
    it('login input is rendered', () => {
        render (<App />);
        const emailInput = screen.getAllByRole('textbox');
        const passwordInput = screen.getByPlaceholderText(/password/i);
        expect(emailInput.length).toBe(1);
        expect(passwordInput).toBeInTheDocument();
    })

    it ('render label elements', () => {
        render (<App />);
        const emailLabel = screen.getByLabelText(/email/i);
        const passwordLabel = screen.getByLabelText(/password/i);
        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
    })

    it ('render submit button', () => {
        render (<App />);
        const submitButton = screen.getByRole('button', {name: /ok/i});
        expect(submitButton).toBeInTheDocument();
    })
})