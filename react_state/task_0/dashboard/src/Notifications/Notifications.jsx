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
    const {notifications, displayDrawer, handleDisplayDrawer, handleHideDrawer} = this.props;

        return (
            <>
            <div 
            className={css(styles.notificationTitle)} 
            onClick={handleDisplayDrawer}>
                <p className={css(styles.clickable)}>Your notifications</p>
            </div>

            {displayDrawer && (
                <div className={css(
                    styles.notifications, 
                    styles.mobileNotifications
                )}>
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
                            <ul className={css(styles.ul)}>
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

const opacity = {
    '0%': {
        opacity: 0.5,
    },
    '100%': {
        opacity: 1,
    }
};

const bounce = {
    '0%': {
        transform: 'translateY(0px)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    },
};

const styles = StyleSheet.create({
    notifications: {
        border: '2px dotted #e1003c',
        paddingLeft: '10px',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        '@media (max-width: 900px)' : {
            display: 'none'
        }
    },
    mobileNotifications: {
        '@media (max-width: 900px)' : {
            display: 'flex',
            border: 'none',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'left',
            paddingRight: '30px',
            paddingLeft: '30px',
            paddingTop: '20px',
            paddingBottom: '20px',
            border: '2px dotted grey',
        }
    },
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '15px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
         '@media (max-width: 900px)' : {
            top: '75px',
            right: '30px',
        }
    },
    closeIcon: {
        width: '10px',
        height: '10px',
    },
    ul: {
        '@media (max-width: 900px)' : {
            padding: '10px',
        }
    },
    notificationTitle: {
        display: 'flex',
        width: '100wh',
        justifyContent: 'left',
        ':hover': {
            animationName: [opacity, bounce],
            animationDuration: '0.5s',
            animationIterationCount: '3',
        },
        '@media (max-width: 900px)' : {
            display: 'flex',
            justifyContent: 'right',
            paddingright: '10px',
            margin: '10px',
            width: '100wh',
        }
    },
    clickable: {
        cursor: 'pointer',
    },
});


export default Notifications;