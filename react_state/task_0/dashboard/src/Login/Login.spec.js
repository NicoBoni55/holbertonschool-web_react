import {screen, render} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test ('renders the elements', () => {
    render(<Login/>);
    const labelEmail = screen.getByLabelText(/Email/i);
    const labelPassword = screen.getByLabelText(/Password/i);
    const inputEmail = screen.getByPlaceholderText(/Email/i);
    const inputPassword = screen.getByPlaceholderText(/Password/i);
    const button = screen.getByRole("button");
    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test ('inputs elements get focused', async () => {
    const user = userEvent.setup();
    render(<Login/>);
    const labelEmail = screen.getByLabelText(/Email/i);
    const labelPassword = screen.getByLabelText(/Password/i);
    const inputEmail = screen.getByPlaceholderText(/Email/i);
    const inputPassword = screen.getByPlaceholderText(/Password/i);
    await user.click(labelEmail);
    expect(inputEmail).toHaveFocus();
    await user.click(labelPassword);
    expect(inputPassword).toHaveFocus();
    
}, 30000);