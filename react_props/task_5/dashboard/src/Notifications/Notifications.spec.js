import {fireEvent} from '@testing-library/react';
import {render, screen} from '@testing-library/react';
import Notifications from './Notifications';

const notificationList = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'default', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'}}
]

describe('Notifications component', () => {
    it('check notification title', () => {
        render(<Notifications />);
        const title = screen.getByText(/here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    it('check that button element is being displayed', () => {
        render(<Notifications />);
        const button = screen.getByLabelText(/Close/i);
        expect(button).toBeInTheDocument();
    });

    it('check that li shows displayed', () => {
        render(<Notifications notifications={notificationList} />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent(/New course available/i);
        expect(listItems[1]).toHaveTextContent(/New resume available/i);
        expect(listItems[2]).toHaveTextContent(/Urgent requirement/i);
    })

    it('check that click button displays console log', () => {
        const log = jest.spyOn(console, 'log');
        render(<Notifications />);
        const button = screen.getByLabelText(/Close/i);
        fireEvent.click(button);
        expect(log).toHaveBeenCalledWith("Close button has been clicked");
        log.mockRestore();
    })
})


test('renders NotificationItem with 3 notification items', () => {
    render(<Notifications notifications={notificationList} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
    expect(listItems[0]).toHaveTextContent('New course available');
    expect(listItems[1]).toHaveTextContent('New resume available');
    expect(listItems[2]).toHaveTextContent('Urgent requirement - complete by EOD');
})