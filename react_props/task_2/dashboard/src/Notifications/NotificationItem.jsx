import React from "react";
import PropTypes from "prop-types";

export default function NotificationItem({ type, html, value }) {
    const className = type === 'default' ? 'default-notification' : 'urgent-notification';
    return (
        <li data-notification-type={type} className={className}>
            {html ? (
                <span dangerouslySetInnerHTML={html}>
                </span>
            ) : (
                value
            )}
        </li>
    );
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