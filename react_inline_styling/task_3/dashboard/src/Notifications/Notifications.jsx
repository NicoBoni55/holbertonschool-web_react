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
            <div className={css(styles.notificationTitle)}>
                <p>Your notifications</p>
            </div>

            {(displayDrawer) && (
                <div className={css(styles.notifications)}>
                    {notifications.length === 0 ?(
                     <p>No new Notification for now</p>
                    ) : (
                        <>
                            <p className={css(styles.title)}>Here is the list of notifications</p>
                            <button
                                className={css(styles.closeButton)}
                                aria-label='Close' 
                                onClick={() => console.log('Close button has been clicked')}>
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

}

const styles = StyleSheet.create({
    notifications: {
        border: '2px dotted #e1003c',
        paddingLeft: '10px',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        '@media (max-width: 900px)': {
            width: '100vw',
            position: 'absolute',
            left: '0',
            top: '0',
            right: '0',
            backgroundColor: 'white',
            height: '100vh',
            overflowY: 'auto',
            padding: '10px',
            border: 'none',
        }
    },
    closeButton: {
        position: 'absolute',
        top: '55px',
        right: '10px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '@media (max-width: 900px)': {
            top: '10px',
            right: '50px',
            backgroundColor: 'grey',
        }
    },
    closeIcon: {
        width: '10px',
        height: '10px',
    },
    notificationTitle: {
        '@media (max-width: 900px)' : {
            display: 'flex',
            border: 'none',
            justifyContent: 'right',
            alignItems: 'center',
        }
    },
    ul: {
        '@media (max-width: 900px)': {
            padding: '0',
            fontSize: '20px',
            listStyleType: 'none',

        }
    },
    title: {
        '@media (max-width: 900px)': {
            fontSize: '18px',
            textAlign: 'left',
            fontWeight: 'bold',
        },
    }

});


export default Notifications;