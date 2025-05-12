import NotificationItem from "./NotificationItem";
import {render, screen} from "@testing-library/react";
import {fireEvent} from "@testing-library/react";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test ('check li has the color blue', () => {
    render(<NotificationItem type="default" />);
    const liBlue = screen.getByRole("listitem");
    expect(liBlue).toHaveAttribute("data-notification-type", "default");
})
test ('check li has the color red', () => {
    render (<NotificationItem type="urgent" />);
    const liRed = screen.getByRole("listitem");
    expect(liRed).toHaveAttribute("data-notification-type", "urgent");
})
test ('check that markAsRead is called', () => {
    const markAsRead = jest.fn();
    render(<NotificationItem id={1} onClick={() => markAsRead(1)} />);
    const li = screen.getByRole("listitem");
    fireEvent.click(li);
    expect(markAsRead).toHaveBeenCalledWith(1);
})