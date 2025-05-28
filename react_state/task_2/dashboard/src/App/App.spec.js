import React from 'react';
import newContext from '../Context/context';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App component', () => {
  test('renders header, login and footer components', () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  test('calls logOut and alerts when Ctrl + H is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    alertMock.mockRestore();
  });

  test('displays "Course list" section with courses when isLoggedIn is true',async () => {
    const user = {
      email: 'example@gmail.com',
      password: 'password123',
      isLoggedIn: true,
    };

    const customLogOut = jest.fn();
    render(
      <newContext.Provider value={{ user, logOut: customLogOut }}>
        <App />
      </newContext.Provider>
    );

    await waitFor(() => {
      const courseList = screen.getByText(/Course list/i);
      expect(courseList).toBeInTheDocument();
    });
  });

  test('displays "Log in to continue" when isLoggedIn is false', () => {
    render(<App />);
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  test('displays News from the School and its paragraph', () => {
    render(<App />);
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });
});

describe('App notification drawer behavior', () => {
  test('displays drawer when clicking on "Your notifications"', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  test('hides drawer when clicking on close button', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/your notifications/i));
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
  });
});