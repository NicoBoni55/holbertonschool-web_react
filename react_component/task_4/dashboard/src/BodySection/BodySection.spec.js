import {screen, render} from "@testing-library/react";
import BodySection from "./BodySection";

test ('renders a heading with the title "Welcome to Holberton School!"', () => {
    render(<BodySection title="Welcome to Holberton School!" />);
    const heading = screen.getByText("Welcome to Holberton School!", {selector: 'h2'});
    expect(heading).toBeInTheDocument();
})

test ('renders any number of children', () => {
    render(<BodySection title={"Welcome to Holberton!"} children={<p>Test</p>} />);
    const p = screen.getByText("Test");
    expect(p).toBeInTheDocument();
})