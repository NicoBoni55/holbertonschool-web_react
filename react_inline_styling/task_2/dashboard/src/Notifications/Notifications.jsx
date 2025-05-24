import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.notifications.length !== nextProps.notifications.length,
            this.props.displayDrawer !== nextProps.displayDrawer
        );
    }

    render () {
    const {notifications, handleDisplayDrawer, handleHideDrawer} = this.props;
    const {displayDrawer} = this.props;
        return (
            <>
            <div className='notifications-title' onClick={handleDisplayDrawer}>
                <p>Your notifications</p>
            </div>

            {displayDrawer && (
                <div className={css(styles.notifications)}>
                    {notifications.length === 0 ?(
                        <p>No new Notification for now</p>
                    ) : (
                        <>
                            <p>Here is the list of notifications</p>
                            <button
                                className={css(styles.closeButton)}
                                aria-label='Close' 
                                onClick={handleHideDrawer}>
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
            )}
        </>
        )
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    notifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
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