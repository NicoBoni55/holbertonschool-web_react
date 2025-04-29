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