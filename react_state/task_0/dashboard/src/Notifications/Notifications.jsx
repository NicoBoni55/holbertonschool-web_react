import { StyleSheet, css } from 'aphrodite';
import React, { Component } from 'react';
import closeIcon from "../assets/close-button.png";
import NotificationItem from './NotificationItem';

const opacityAnim = {
  from: {
    opacity: 0.5
  },
  to: {
    opacity: 1
  }
};

const bounceAnim = {
  from: {
    translate: '0px 0px'
  },
  '50%': {
    translate: '0px -5px'
  },
  to: {
    translate: '0px 5px'
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '1rem',
    backgroundColor: '#fff8f8',
    display: 'flex',
    justifyContent: 'right',
    ':hover': {
      animationName: [bounceAnim, opacityAnim],
      animationDuration: '0.5s',
      animationIterationCount: '3',
      cursor: 'pointer'
    },
  },
  notifications: {
    display: 'flex',
    justifyContent: 'flex-start',
    borderStyle: 'dotted',
    borderColor: '#e1003c',
    paddingLeft: '2px',
    paddingRight: '2px',
    fontSize: '12px',
    height: "60%",
    '@media (max-width: 900px)': {
      height: '100vh',
      backgroundColor: 'white',
      position: 'relative',
      zIndex: '10',
      top: '-50px',
      border: 'none',
      width: '100%',
    }
  },
  paragraph: {
    paddingLeft: '1rem',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      fontWeight: 'bold'
    }
  },
  closeButton: {
    marginLeft: 'auto',
    backgroundColor: 'white',
    border: 'none',
    height: '25px',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
  },
  notificationList: {
    color: 'red',
    '@media (max-width: 900px)': {
      padding: '0px',
      width: '100%',
    }
  },
  container: {
    '@media (max-width: 900px)': {
      width: '100%',
    }
  },
});

class Notifications extends Component {

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.isDrawerDisplayed !== this.props.isDrawerDisplayed
    );
  }

  render() {
    const { notifications, isDrawerDisplayed, showDrawer, hideDrawer } = this.props;
    return (
      <>
        <div className={css(styles.title)} data-testid="displayBtn" onClick={() => { showDrawer() }}>Your notifications</div>
        {isDrawerDisplayed ? (
          <div className={css(styles.notifications)}>
            <div className={css(styles.container)}>
              <p className={css(styles.paragraph)}>Here is the list of notifications</p>
              <ul className={css(styles.notificationList)}>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      html={notification.html}
                      value={notification.value}
                      markAsRead={this.markAsRead}
                    />
                  ))
                ) : (
                  <p className={css(styles.paragraph)}>No new notification for now</p>
                )}
              </ul>
            </div>
            <button
              aria-label="Close"
              onClick={() => { hideDrawer() }}
              className={css(styles.closeButton)}
            >
              <img alt="Close Button" src={closeIcon} className={css(styles.closeIcon)} />
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;
