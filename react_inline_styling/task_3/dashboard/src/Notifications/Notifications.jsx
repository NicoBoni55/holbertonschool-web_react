import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { nominalTypeHack } from 'prop-types';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.notifications.length !== nextProps.notifications.length ||
            this.state.isVisible !== nextState.isVisible);
    }

    toggleVisibility = () => {
        console.log('Toggle function has been called');
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    }

    render () {
    const {notifications, displayDrawer} = this.props;
    const {isVisible} = this.state;

    console.log("isVisible", isVisible);
        return (
            <>

                <div className={css(styles.notificationTitle)}>
                <p className={css(styles.clickable)} onClick={this.toggleVisibility}>Your notifications</p>
            </div>

            {(displayDrawer || isVisible) && (
                <div className={css(
                    styles.notifications, 
                    isVisible  && styles.mobileNotifications
                )}>
                    {notifications.length === 0 ?(
                        <p>No new Notification for now</p>
                    ) : (
                        <>
                            <p>Here is the list of notifications</p>
                            <button
                                className={css(styles.closeButton)}
                                aria-label='Close' 
                                onClick={this.toggleVisibility}>
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
            alignItems: 'center',
        }
    },
    closeButton: {
        position: 'absolute',
        top: '55px',
        right: '10px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
         '@media (max-width: 900px)' : {
            top: '100px',
            right: '10px',
            backgroundColor: 'grey',
        }
    },
    closeIcon: {
        width: '10px',
        height: '10px',
    },
    ul: {
        '@media (max-width: 900px)' : {
            padding: '0',
            listStyleType: 'none',
        }
    },
    notificationTitle: {
        '@media (max-width: 900px)' : {
            display: 'flex',
            justifyContent: 'right',
            margin: '10px',
            width: '100wh',
        }
    },
    clickable: {
        cursor: 'pointer',
    }
});


export default Notifications;