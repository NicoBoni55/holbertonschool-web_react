import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test ('renders the component', async () => {
    render(<Login />);

    const user = userEvent.setup();
    const p1 = screen.getByText('Login to access the full dashboard');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const emailLabel = screen.getByText('Email');
    const passwordLabel = screen.getByText('Password');
    const loginButton = screen.getByText('OK');

    await user.click(emailLabel);
    await user.click(passwordLabel);

    expect(p1).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toHaveFocus();
    expect(passwordInput).toHaveFocus();
    expect(passwordLabel).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});