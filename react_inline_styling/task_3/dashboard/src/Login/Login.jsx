import { StyleSheet, css } from "aphrodite"
import App from "../App/App"

export default function Login() {
    return (
        <div className={css(styles.AppBody)}>
        <p className={css(styles.AppP)}>Login to access the full dashboard</p>
        <div className={css(styles.AppLogin)}>
        <div className={css(styles.AppSmall)}>
        <label className={css(styles.AppLabel)} htmlFor='email'>Email</label>
        <input className={css(styles.AppInput)} type='email' id='email' placeholder='Email' />
        </div>
        <div className={css(styles.AppSmall)}>
        <label className={css(styles.AppLabel)} htmlFor='password'>Password</label>
        <input className={css(styles.AppInput)} type='password' id='password' placeholder='Password' />
        </div>
        <button className={css(styles.AppButton)} >OK</button>
        </div>
        </div>
    )
}

const styles = StyleSheet.create({
    AppBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        fontWeight: '600',
        paddingBottom: '25rem',
        borderBottom: '2px solid #e0354b',

    },
    AppLogin: {
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
            alignItems: 'left',
        }
    },
    AppLabel: {
        fontSize: '14px',
        marginTop: '15px',
        marginRight: '4px',
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'row',
        },
    },
    AppInput: {
        marginTop: '12px',
        marginRight: '7px',
        marginLeft: '5px',
        width: '200px',
        height: '15px',
    },
    AppButton: {
        width: '50px',
        fontSize: '10px',
        height: '25px',
        marginTop: '7px',
        marginLeft: '9px',
        '@media (max-width: 900px)' : {
            marginLeft: '0px',
            marginTop: '15px',
            border: '2px solid #FFDE59',
        }
    },
    AppSmall: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'left',
        }
    },
    AppP: {
        fontSize: '14px',
    }
})