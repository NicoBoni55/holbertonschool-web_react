import React, { Component } from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return (
      this.props.notifications.length !== nextProps.notifications.length ||
      this.props.displayDrawer !== nextProps.displayDrawer
    );
  }

  render() {
    const {
      notifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        <div
          className="menuItem"
          onClick={handleDisplayDrawer}
          id="menuItem"
        >
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div
            className={css(styles.notifications)}
          >
            {notifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
                <button
                  className="close-button"
                  aria-label="Close"
                  onClick={handleHideDrawer}
                >
                  <img
                    src={closeIcon}
                    alt="close-icon"
                    style={{ width: "10px", height: "10px" }}
                  />
                </button>
              </>
            ) : (
                <p>No new notification for now</p>
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
};

const styles = StyleSheet.create({
  notifications: {
    border: "2px dotted #e1003c",
    padding: "6px 12px",
    position: "absolute",
    top: "21px",
    right: "7px",
    marginTop: "12px",
    zIndex: 100,
    "@media (max-width: 900px)": {
      width: "100%",
      padding: "0px",
      fontSize: "20px",
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },
});

export default Notifications;
