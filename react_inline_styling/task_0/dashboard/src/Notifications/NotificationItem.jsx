import React from "react";
import PropTypes from "prop-types";
import { PureComponent } from "react";


class NotificationItem extends PureComponent {
    render() {

    const {type} = this.props;
    const {html} = this.props;
    const {value} = this.props;
    const {onClick} = this.props;
    const className = type === 'default' ? 'default-notification' : 'urgent-notification';
        return (
            <li data-notification-type={type} className={className} onClick={onClick}>
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

export default NotificationItem;