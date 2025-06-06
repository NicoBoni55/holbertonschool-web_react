import {render, screen} from '@testing-library/react';
import Notifications from './Notifications';

const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'} },
]

test ('displays 3 notification items', () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true}/>);

    const notificationItems = screen.getAllByRole("listitem");
    expect(notificationItems).toHaveLength(3);


    const newCourseElement = screen.getByText(/New course available/i);
    const newResumeElement = screen.getByText(/New resume available/i);
    const urgentElement = screen.getByText(/Urgent requirement/i);

    expect(newCourseElement).toBeInTheDocument();
    expect(newResumeElement).toBeInTheDocument();
    expect(urgentElement).toBeInTheDocument();
})

test('displayDrawer set to false', () => {
    render(<Notifications displayDrawer={false} notifications={notificationsList}/>);

    const button = screen.queryByLabelText(/Close/i);
    const notificationText = screen.queryByText(/Here is the list of notifications/i);
    const listItems = screen.queryAllByRole("listitem");

    expect(button).not.toBeInTheDocument();
    expect(notificationText).toBeInTheDocument();
    expect(listItems).toHaveLength(0);
})

test('displayDrawer set to true', () => {
    render(<Notifications displayDrawer={true} notifications={notificationsList}/>);

    const button = screen.queryByLabelText(/Close/i);
    const notificationText = screen.queryByText(/Here is the list of notifications/i);
    const listItems = screen.queryAllByRole("listitem");

    expect(button).toBeInTheDocument();
    expect(notificationText).toBeInTheDocument();
    expect(listItems).toHaveLength(3);
})

test('displayDrawer set to true and notifications is empty', () => {
    render(<Notifications displayDrawer={true} notifications={[]}/>);

    const button = screen.queryByLabelText(/Close/i);
    const notificationText = screen.queryByText(/No new Notification for now/i);
    const listItems = screen.queryAllByRole("listitem");

    expect(button).not.toBeInTheDocument();
    expect(notificationText).toBeInTheDocument();
    expect(listItems).toHaveLength(0);
})