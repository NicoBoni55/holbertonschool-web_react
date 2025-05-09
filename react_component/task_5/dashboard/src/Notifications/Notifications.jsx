import closeIcon from '../assets/close-button.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { Component } from 'react';

class Notifications extends Component {

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    render () {
    const {notifications} = this.props;
    const {displayDrawer} = this.props;
        return (
            <>
            <div className='notifications-title'>
                <p>Your notifications</p>
            </div>

            <div className="notifications">
                {notifications.length === 0 ?(
                    <p>No new Notification for now</p>
                ): displayDrawer === false ? (
                    <p>Here is the list of notifications</p>
                ) : (
                    <>
                        <p>Here is the list of notifications</p>
                        <button
                            aria-label='Close' 
                            onClick={() => console.log('Close button has been clicked')}>
                                <img src={closeIcon} alt='close-icon'></img>
                        </button>
                        <ul>
                            {notifications.map((notification) => (
                                <NotificationItem
                                key={notification.id}
                                type={notification.type}
                                value={notification.value}
                                html={notification.html}
                                onClick={() =>(this.markAsRead(notification.id))}
                                />
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
        )
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    notifications: [],

}


export default Notifications;