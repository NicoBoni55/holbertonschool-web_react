import {screen, render} from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

test ('component contains a div with the class BodySectionWithMarginBotton', () => {
    render(<BodySectionWithMarginBottom title="Welcome!"/>);
    const div = screen.getByText("Welcome!", {selector: 'h2'}).parentElement.parentElement; // get the second parent element
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass("bodySectionWithMargin");
})

test ('render the BodySection component', () => {
    render(<BodySectionWithMarginBottom title={"welcome to Holberton School!"} />);
    const BodySection = screen.getByText("welcome to Holberton School!", {selector: 'h2'});
    expect(BodySection).toBeInTheDocument();
})
