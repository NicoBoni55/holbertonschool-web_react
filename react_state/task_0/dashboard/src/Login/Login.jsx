import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        height: '100%',
        padding: '0.5rem',
        flexDirection: 'column',
    },
    loginDiv: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
        }
    },
    btn: {
        '@media (max-width: 900px)': {
            width: '50px',
        }
    }
});

const Login = () => {
    return (
        <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>

            <div className={css(styles.loginDiv)}>
                <span>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </span>
                <span>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </span>
                <button className={css(styles.btn)}>OK</button>
            </div>
        </div>
    );
};

export default Login;