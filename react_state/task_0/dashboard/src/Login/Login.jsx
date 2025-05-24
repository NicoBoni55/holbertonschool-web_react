import { StyleSheet, css } from "aphrodite"

export default function Login() {
    return (
        <div className={css(styles.LoginBody)}>
        <p className={css(styles.LoginP)}>Login to access the full dashboard</p>
        <div className={css(styles.AppLogin, styles.LoginSmall)}>
        <label className={css(styles.LoginLabel)} htmlFor='email'>Email</label>
        <input className={css(styles.LoginInput)} type='email' id='email' placeholder='Email' />
        <label className={css(styles.LoginLabel)} htmlFor='password'>Password</label>
        <input className={css(styles.LoginInput)} type='password' id='password' placeholder='Password' />
        <button className={css(styles.LoginButton)} >OK</button>
        </div>
        </div>
    )
}

const styles = StyleSheet.create({
    LoginBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        paddingTop: '0.5rem',
        paddingBottom: '25rem',
        borderBottom: '2px solid #e0354b',
        '@media (max-width: 900px)': {
            borderBottom: 'none',
            paddingBottom: '3rem',
            alignItems: 'left',
        }
    },
    AppLogin: {
        display: 'flex',
        flexDirection: 'row',
    },
    LoginLabel: {
        fontSize: '14px',
        marginTop: '15px',
        marginRight: '4px',
    },
    LoginInput: {
        marginTop: '12px',
        marginRight: '7px',
        marginLeft: '5px',
        width: '200px',
        height: '15px',
    },
    LoginButton: {
        border: '2px solid #FFDE59',
        width: '50px',
        fontSize: '10px',
        height: '25px',
        marginTop: '7px',
        marginLeft: '8px',
        '@media (max-width: 900px)' : {
            marginLeft: '5px',
            marginTop: '15px'
        }
    },
    LoginP: {
        fontSize: '14px',
    },

    LoginSmall: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
        }
    }
})