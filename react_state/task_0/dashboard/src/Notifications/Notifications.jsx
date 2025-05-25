import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.displayDrawer !== this.props.displayDrawer) {
            return true;
        }
        if (nextProps.notifications.length !== this.props.notifications.length) {
            return true;
        }
        return false;
    }

    render () {
    const {notifications} = this.props;
    const {displayDrawer} = this.props;
    const {handleDisplayDrawer} = this.props;
    const {handleHideDrawer} = this.props;
        return (
            <>
            {!displayDrawer && (
                <div
                 className={css(styles.title)}
                 onClick={handleDisplayDrawer}
                >
                    <p>Your notifications</p>
                </div>
            )}
        {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            className={css(styles.closeButton)}
                            aria-label="Close"
                            onClick={handleHideDrawer}
                        >
                            <img 
                                className={css(styles.closeIcon)} 
                                src={closeIcon} 
                                alt="close-icon" 
                            />
                        </button>
                        
                        {notifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            <>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {notifications.map((notification) => (
                                        <NotificationItem
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            onClick={() => this.markAsRead(notification.id)}
                                        />
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                )}
            </>
        );
    }
}


Notifications.defaultProps = {
    displayDrawer: false,
    notifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
}

const opacityAnim = {
    from: { opacity: 0.5 },
    to: { opacity: 1 }
};

const bounceAnim = {
  '0%': { translate: '0px 0px' },
  '50%': { translate: '0px -5px' },
  '100%': { translate: '0px 5px' },
};

const styles = StyleSheet.create({
  title: {
    float: 'right',
    backgroundColor: '#fff8f8',
    padding: '8px',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 100,
    ':hover': {
      animationName: [bounceAnim, opacityAnim],
      animationDuration: '0.5s',
      animationIterationCount: 3,
      cursor: 'pointer',
    },
  },
   notifications: {
        border: '2px dotted #e1003c',
        padding: '10px',
        float: 'right',
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 10,
        '@media (max-width: 900px)': {
            width: '100%',
            padding: '0',
            border: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 1000,
        }
    },
    
    closeButton: {
        background: 'transparent',
        border: 'none',
        position: 'absolute',
        right: '10px',
        top: '10px',
        cursor: 'pointer',
    },
    
    closeIcon: {
        width: '15px',
        height: '15px',
    }
});
export default Notifications;