import holbertonLogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <div className={css(styles.AppHeader)}>
            <img className={css(styles.AppLogo)} src={holbertonLogo} alt="holberton logo" />
            <h1 className={css(styles.AppTitle)}>School Dashboard</h1>
        </div>
    )
}

const styles = StyleSheet.create({
    AppHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20px',
        width: '100vw',
        '@media (max-width: 900px)': {
            borderBottom: '2px solid #e0354b',
        }
    },
    AppLogo: {
        width: '150px',
        height: '150px',
        '@media (max-width: 900px)': {
            width: '100px',
            height: '100px',
        }
    },
    AppTitle: {
        fontSize: '25px',
        fontFamily: 'sans-serif',
        marginLeft: '20px',
        color: '#e1003c',
        '@media (max-width: 900px)': {
            fontSize: '20px',
            marginLeft: '10px',
        }
    }
});