import { render, screen, within } from "@testing-library/react";
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from "./CourseList";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// CourseList test suite
describe("CourseList component", () => {
  // Test if correct number of rows are rendered
  it.skip("5 rows renedered when array is given", () => {
    const courseList = [
      { id: 1, name: "React", credit: "55" },
      { id: 2, name: "Express", credit: "65" },
      { id: 3, name: "Typescript", credit: "85" },
      { id: 4, name: "MongoDB", credit: "75" },
      { id: 5, name: "Jest", credit: "95" },
    ];

    render(<CourseList courses={courseList} />);

    const [, tbody] = screen.getAllByRole("rowgroup"); // tbody has role 'rowgroup'
    const bodyRows = within(tbody).getAllByRole("row");

    // Assert if 5 rows are rendered
    expect(bodyRows.length).toBe(5);
  });

  // Test if correct number of rows are rendered
  it("1 rows renedered when empty array is given", () => {
    render(<CourseList />);

    const tbody = screen.getByRole("rowgroup");
    const bodyRow = within(tbody).getByRole("row", { hidden: true });

    // Assert if 5 rows are rendered
    expect(bodyRow).toBeInTheDocument();
  });
});
