import { Link } from "react-router-dom";
import './style.css'
import { FaFacebookF, FaTwitter, FaGooglePlusG   } from "react-icons/fa6";


function CardLogin() {
    return ( 
        <>
            <div className="container">
                <div className="esquerdo">
                    <div className="social-card" >
                        <FaFacebookF />
                        <Link to="/"> 
                            
                            Login with Facebook 
                        </Link>
                    </div>
                    <div className="social-card">
                    <FaTwitter />

                        <Link> Login with Twitter</Link>
                    </div>
                    <div className="social-card">
                    <FaGooglePlusG />
                        <Link>  Login with  Google +</Link>
                    </div>
                </div>

                <div className="direito">
                    <h3>Sing  in manuelly</h3>

                    <div className="inputs">
                        <input type="text" placeholder="Username  or email"/>
                        <input type="password" placeholder="Password" />
                    </div>

                    <div>
                        <input type="checkbox"  /> <b>Remember</b>
                        <button>Login</button>
                    </div>

                    <Link to="/"><span>Register now | Forgot password?</span></Link>
                </div>
            </div>
        </>
     );
}

export default CardLogin;