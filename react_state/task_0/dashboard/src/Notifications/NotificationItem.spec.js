import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  it("has class corresponding to blue style when type is default", () => {
    render(<NotificationItem type="default" value="New course available" id={1} markAsRead={() => {}} />);

    const listElement = screen.getByTestId("item1");

    // Check that the class name includes Aphrodite's generated one
    expect(listElement).toHaveAttribute("data-notification-type", "default");
    expect(listElement.className).toMatch(/default_/); // Aphrodite class name for blue
  });

  it("has class corresponding to red style when type is urgent", () => {
    render(<NotificationItem type="urgent" value="New resume available" id={2} markAsRead={() => {}} />);

    const listElement = screen.getByTestId("item2");

    expect(listElement).toHaveAttribute("data-notification-type", "urgent");
    expect(listElement.className).toMatch(/urgent_/); // Aphrodite class name for red
  });

  it("calls markAsRead with the correct id on click", async () => {
    const markAsReadMock = jest.fn();

    render(<NotificationItem type="urgent" value="New resume available" markAsRead={markAsReadMock} id={2} />);

    const listElement = screen.getByTestId("item2");

    await userEvent.click(listElement);

    expect(markAsReadMock).toHaveBeenCalledTimes(1);
    expect(markAsReadMock).toHaveBeenCalledWith(2);
  });
});
