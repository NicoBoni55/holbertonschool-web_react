import { render, screen } from "@testing-library/react";
import * as utils from "../utils/utils";
import Footer from "./Footer";

describe("Footer component", () => {
  let mockGetFooterCopy = null;
  beforeEach(() => {
    mockGetFooterCopy = jest
      .spyOn(utils, "getFooterCopy")
      .mockReturnValue("Holberton School");

    render(<Footer />);
  });

  //   Check text in footer has correct test when getFooterCopy arg is true
  it("Has correct text", () => {
    const FooterText = screen.getByText(/Copyright 2025 - holberton School/i);
    expect(FooterText).toBeInTheDocument();

    mockGetFooterCopy.mockRestore();
  });
});
