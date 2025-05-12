import holbertonLogo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
    return (
        <div className='App-header'>
            <img src={holbertonLogo} alt="holberton logo" />
            <h1>School Dashboard</h1>
        </div>
    )
}