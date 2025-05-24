import { render, screen } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection Component Tests", () => {
    
    // Test if prop title value gets rendered 
    it("title prop value gets rendered", () => {
        const title = "This is the title";

        render(<BodySection title={title}/>);

        // Get heading element
        const hElement = screen.getByRole("heading", {level: 2,
            name: /This is the title/i
        });

        // Assert that the title is rendered
        expect(hElement).toBeInTheDocument();
    })

    // Test if Body Component renders children passed to it
    it("renders children passed to it", () => {
        const children = (
            <>
                <p>Hello World</p>
                <p>Bye World</p>
            </>
        )
        const title = "This is the title";

        render(<BodySection title={title}>{children}</BodySection>)

        // Get paragraph elements
        const paragraphs = screen.getAllByRole("paragraph");

        // Assert existence of paragraphs
        expect(paragraphs[0].textContent).toBe("Hello World");
        expect(paragraphs[1].textContent).toBe("Bye World");

    })
})