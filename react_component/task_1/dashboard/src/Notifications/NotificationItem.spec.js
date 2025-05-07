import NotificationItem from "./NotificationItem";
import {render, screen} from "@testing-library/react";

test ('check li has the color blue', () => {
    render(<NotificationItem type="default" />);
    const liBlue = screen.getByRole("listitem");
    expect(liBlue).toHaveAttribute("data-notification-type", "default");
    expect(liBlue).toHaveClass("default-notification");
})
test ('check li has the color red', () => {
    render (<NotificationItem type="urgent" />);
    const liRed = screen.getByRole("listitem");
    expect(liRed).toHaveAttribute("data-notification-type", "urgent");
    expect(liRed).toHaveClass("urgent-notification");
})