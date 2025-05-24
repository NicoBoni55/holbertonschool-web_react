import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        display: 'flex',
        width: '80px',
    },
    heading: {
        display: 'flex',
        fontWeight: 'bold',
        color: '#e1003c',
    },
});

const Header = () => {
    return (
        <div className={css(styles.header)}>
            <img src={holbertonLogo} className={css(styles.logo)} alt="holberton logo" />
            <h1 className={css(styles.heading)}>School dashboard</h1>
        </div>
    );
};

export default Header;
