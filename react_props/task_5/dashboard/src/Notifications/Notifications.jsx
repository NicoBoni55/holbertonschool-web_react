import closeIcon from '../assets/close-button.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications({notifications = [], displayDrawer = false }) {
    return (
        <>
        <div className='notifications-title'>
            <p>Your notifications</p>
        </div>
            {displayDrawer ? (
                <div className="notifications">
                    <p>Here is the list of notifications</p>
                </div>
            ) : (
                <div className="notifications">
                    <p>Here is the list of notifications</p>
                    <button
                        aria-label='Close' 
                        onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} alt='close-icon'></img>
                    </button>
                </div>
            )}
            <ul>
                {notifications.map((notifications) => (
                    <NotificationItem
                    key={notifications.id}
                    type={notifications.type}
                    value={notifications.value}
                    html={notifications.html}
                    />
                ))}
            </ul>
        </>
    );
}

export default Notifications;