import React, { Component } from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.notifications.length !== nextProps.notifications.length ||
      this.props.displayDrawer !== nextProps.displayDrawer
    );
  }

  render() {
    const { notifications, displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    
    return (
      <>
        <div 
          className="menuItem" 
          onClick={handleDisplayDrawer}
          data-testid="menuItem"
        >
          <p>Your notifications</p>
        </div>
        
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="notifications">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
              data-testid="closeButton"
            >
              <img src={closeIcon} alt="close-icon" style={{ width: "15px", height: "15px" }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {notifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
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
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dotted #e1003c',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: 100,
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: '20px',
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
  }
});

export default Notifications;