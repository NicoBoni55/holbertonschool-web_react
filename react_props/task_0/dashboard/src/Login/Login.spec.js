import {screen, render} from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
    it('renders the component', () => {
        render(<Login />);
        const p1 = screen.getByText('Login to access the full dashboard');
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByText('OK');
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(p1).toBeInTheDocument();
    });
})