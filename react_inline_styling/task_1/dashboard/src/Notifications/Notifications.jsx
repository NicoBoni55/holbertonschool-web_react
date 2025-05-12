import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return (this.props.notifications.length !== nextProps.notifications.length);
    }

    render () {
    const {notifications} = this.props;
    const {displayDrawer} = this.props;
        return (
            <>
            <div className='notifications-title'>
                <p>Your notifications</p>
            </div>

            <div className={css(styles.notifications)}>
                {notifications.length === 0 ?(
                    <p>No new Notification for now</p>
                ): displayDrawer === false ? (
                    <p>Here is the list of notifications</p>
                ) : (
                    <>
                        <p>Here is the list of notifications</p>
                        <button
                            className={css(styles.closeButton)}
                            aria-label='Close' 
                            onClick={() => console.log('Close button has been clicked')}>
                                <img className={css(styles.closeIcon)} src={closeIcon} alt='close-icon'></img>
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

const styles = StyleSheet.create({
    notifications: {
        border: '2px dotted #e1003c',
        paddingLeft: '10px',
        fontSize: '14px',
        fontFamily: 'sans-serif',
    },
    closeButton: {
        position: 'absolute',
        top: '55px',
        right: '10px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    },
    closeIcon: {
        width: '10px',
        height: '10px',
    },
});


export default Notifications;