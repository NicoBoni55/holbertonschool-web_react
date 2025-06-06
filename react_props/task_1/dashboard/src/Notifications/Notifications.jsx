import closeIcon from '../assets/close-button.png';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
    return (
        <div className="notifications">
            <p>Here is the list of notifications</p>
            <button
                aria-label='Close' 
                onClick={() => console.log('Close button has been clicked')}>
                    <img src={closeIcon} alt='close-icon'></img>
            </button>
            <ul>
                <li data-priority="1">New course available</li>
                <li data-priority="2">New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}

export default Notifications;