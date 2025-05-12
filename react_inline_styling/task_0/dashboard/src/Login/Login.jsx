import './Login.css'

export default function Login() {
    return (
        <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div className='App-login'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='Password' />
        <button>OK</button>
        </div>
        </div>
    )
}