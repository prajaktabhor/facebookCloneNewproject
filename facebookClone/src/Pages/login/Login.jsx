import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>Facebook</h3>
                <span className='loginDesc'>Connect with friends and the world around you on Facebook.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Email' className="loginInput" />
                    <input type="text" placeholder='Password' className="loginInput" />
                    <span className='loginForgot'>Forgot Password</span>
                    <button className='loginRegisterButton'>Create a new Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
