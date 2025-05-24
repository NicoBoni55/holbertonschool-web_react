// import { render, screen } from "@testing-library/react";
// import CourseListRow from "./CourseListRow";

// describe("CourseListRow Component", () => {
//   it("renders one header cell with colspan of 2 if textSecondCell is null", () => {
//     render(
//       <table>
//         <thead>
//           <CourseListRow isHeader={true} textFirstCell="Khiba Koenane" />
//         </thead>
//       </table>
//     );

//     const headerCell = screen.getByRole("columnheader");
//     expect(headerCell).toBeInTheDocument();
//     expect(headerCell).toHaveAttribute("colspan", "2");
//     expect(headerCell.textContent).toBe("Khiba Koenane");
//   });

//   it("renders two header cells if textSecondCell is provided", () => {
//     render(
//       <table>
//         <thead>
//           <CourseListRow isHeader={true} textFirstCell="Khiba" textSecondCell="Koenane" />
//         </thead>
//       </table>
//     );

//     const headerCells = screen.getAllByRole("columnheader");
//     expect(headerCells.length).toBe(2);
//     expect(headerCells[0].textContent).toBe("Khiba");
//     expect(headerCells[1].textContent).toBe("Koenane");
//   });

//   it("renders two data cells if isHeader is false", () => {
//     render(
//       <table>
//         <tbody>
//           <CourseListRow textFirstCell="Khiba" textSecondCell="Koenane" />
//         </tbody>
//       </table>
//     );

//     const dataCells = screen.getAllByRole("cell");
//     expect(dataCells.length).toBe(2);
//     expect(dataCells[0].textContent).toBe("Khiba");
//     expect(dataCells[1].textContent).toBe("Koenane");
//   });

//   it("applies correct Aphrodite class for header row (1 column)", () => {
//     const { container } = render(
//       <table>
//         <thead>
//           <CourseListRow isHeader={true} textFirstCell="Khiba Koenane" />
//         </thead>
//       </table>
//     );

//     const row = container.querySelector("tr");
//     expect(row.className).toMatch(/headerRow/);
//   });

//   it("applies correct Aphrodite class for header row (2 columns)", () => {
//     const { container } = render(
//       <table>
//         <thead>
//           <CourseListRow isHeader={true} textFirstCell="Khiba" textSecondCell="Koenane" />
//         </thead>
//       </table>
//     );

//     const row = container.querySelector("tr");
//     expect(row.className).toMatch(/headerRow/);
//   });

//   it("applies correct Aphrodite class for default row", () => {
//     const { container } = render(
//       <table>
//         <tbody>
//           <CourseListRow textFirstCell="Khiba" textSecondCell="Koenane" />
//         </tbody>
//       </table>
//     );

//     const row = container.querySelector("tr");
//     expect(row.className).toMatch(/defaultRow/);
//   });
// });
