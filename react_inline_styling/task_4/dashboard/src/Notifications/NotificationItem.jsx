import React from "react";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { StyleSheet, css } from "aphrodite";


class NotificationItem extends PureComponent {
    render() {

    const {type} = this.props;
    const {html} = this.props;
    const {value} = this.props;
    const {onClick} = this.props;
    const styleclass = type === 'default' ? styles.defaultNotification : styles.urgentNotification;
        return (
            <li data-notification-type={type} className={css(styleclass, styles.li)} onClick={onClick}>
            {html ? (
                <span dangerouslySetInnerHTML={html}>
                </span>
            ) : (
                value
            )}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: ''
};

const styles = StyleSheet.create({
    defaultNotification: {
        color: 'blue',
    },
    urgentNotification: {
        color: 'red',
    },
    li: {
        cursor: 'pointer',
        '@media (max-width: 900px)': {
            width: '100vw',
            borderBottom: '1px solid black',
            fontSize: '20px',
            padding: '10px 8px',
        }
    }
});

export default NotificationItem;