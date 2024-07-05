import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-buttons">
          <button className="login-button">Login with Facebook</button>
          <button className="login-button twitter">Login with Twitter</button>
          <button className="login-button google">Login with Google+</button>
        </div>
        <div className="login-or">OR</div>
        <form className="login-form">
          <div>
            <input type="text" placeholder="Username or email" className="login-input" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="login-input" />
          </div>
          <div className="login-options">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-submit">LOGIN</button>
        </form>
        <div className="login-register">
          <a href="#">Register now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;