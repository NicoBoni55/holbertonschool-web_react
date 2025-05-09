import {screen, render, cleanup} from "@testing-library/react";
import WithLogging from "./WithLogging";
import React from "react";

class MockApp extends React.Component {
    render () {
      return (
        <h1>
          Hello from Mock App Component
        </h1>
      )
    }
}

afterEach(cleanup);

test ('renders the wrapped component correctly', () => {
    const MockWithLogging = WithLogging(MockApp);
    render(<MockWithLogging />);
    const h1 = screen.getByText('Hello from Mock App Component');
    expect(h1).toBeInTheDocument();
});

test ('console.log is called when the component mounts and unmount', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    const MockWithLogging = WithLogging(MockApp);
    const { unmount } = render(<MockWithLogging />);
    expect(consoleLogSpy).toHaveBeenCalledWith('Component MockApp is mounted');
    unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');
    consoleLogSpy.mockRestore();
});