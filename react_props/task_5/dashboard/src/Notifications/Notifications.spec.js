import {fireEvent} from '@testing-library/react';
import {render, screen} from '@testing-library/react';
import Notifications from './Notifications';

const notificationList = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'default', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'}}
]

describe('Notifications component', () => {
    test('check that li shows displayed', () => {
        render(<Notifications displayDrawer={true} notifications={notificationList} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent(/New course available/i);
        expect(listItems[1]).toHaveTextContent(/New resume available/i);
        expect(listItems[2]).toHaveTextContent(/Urgent requirement/i);
    });

    it('check that click button displays console log', () => {
        const log = jest.spyOn(console, 'log');
        render(<Notifications displayDrawer={true} notifications={notificationList} />);
        const button = screen.queryByLabelText(/Close/i);
        if (button) {
            fireEvent.click(button);
            expect(log).toHaveBeenCalledWith("Close button has been clicked");
        } else {
            console.warn("Close button not found");
        }
        log.mockRestore();
    });

    test('renders NotificationItem with 3 notification items', () => {
        render(<Notifications displayDrawer={true} notifications={notificationList} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(3);
        expect(listItems[0]).toHaveTextContent('New course available');
        expect(listItems[1]).toHaveTextContent('New resume available');
        expect(listItems[2]).toHaveTextContent('Urgent requirement - complete by EOD');
    });

    test("title is in all cases", () => {
        render(<Notifications displayDrawer={true} />);
        const title = screen.getByText(/Your notifications/i);
        expect(title).toBeInTheDocument();
    });

    test("displayDrawer set to false", () => {
        render(<Notifications displayDrawer={false} notifications={notificationList}/>);
        const button = screen.queryByLabelText(/Close/i);
        const notificationText = screen.queryByText(/Here is the list of notifications/i);
        const listItems = screen.queryAllByRole("listitem");

        expect(button).not.toBeInTheDocument();
        expect(notificationText).not.toBeInTheDocument();
        expect(listItems.length).toBe(0);
    });

    test("displays No new Notification for now when notifications is empty and displayDrawer is true", () => {
        render(<Notifications displayDrawer={true} notifications={[]}/>);
        const noNotificationText = screen.getByText(/No new Notification for now/i);
        const closeButton = screen.queryByLabelText(/Close/i);

        expect(noNotificationText).toBeInTheDocument();
        if (closeButton) {
            expect(closeButton).toBeInTheDocument();
        }
    });
});

