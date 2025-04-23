import {fireEvent} from '@testing-library/react';
import {render, screen} from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
    it('check notification title', () => {
        render(<Notifications />);
        const title = screen.getByText(/here is the list of notifications/i);
        expect(title).toBeInTheDocument();
    });

    it('check that button element is being displayed', () => {
        render(<Notifications />);
        const button = screen.getByLabelText(/close/i);
        expect(button).toBeInTheDocument();
    });

    it('check that li shows displayed', () => {
        render(<Notifications />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent(/new course available/i);
        expect(listItems[1]).toHaveTextContent(/new resume available/i);
        expect(listItems[2]).toHaveTextContent(/urgent requirement/i);
    })

    it('check that click button displays console log', () => {
        const log = jest.spyOn(console, 'log');
        render(<Notifications />);
        const button = screen.getByLabelText('Close');
        fireEvent.click(button);
        expect(log).toHaveBeenCalledWith('Close button has been clicked');
        log.mockRestore();
    })
})