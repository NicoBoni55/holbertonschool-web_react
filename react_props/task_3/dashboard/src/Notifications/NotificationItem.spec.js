import NotificationItem from "./NotificationItem";
import {render, screen} from "@testing-library/react";


test('renders NotificationItem with type default', () => {
    render(<NotificationItem type="default" value="New course available"/>);
    const listItem = screen.getByText('New course available');

    expect(listItem).toHaveAttribute('data-notification-type', 'default');

    expect(listItem).toHaveClass('default-notification');
})

test('renders NotificationItem with type urgent', () => {
    render(<NotificationItem type="urgent" value="New resume available"/>);
    const listItem = screen.getByText('New resume available');
    
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');

    expect(listItem).toHaveClass('urgent-notification');
})
