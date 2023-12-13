import React from 'react'
import "./LoginSignup.css";
import email_icon from "../Assets/mail.png";
import pass_icon from "../Assets/pass.png";
import user_icon from "../Assets/user.png";



const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" required placeholder='E-Mail'/>
                    </div>
                    <div className="input">
                        <img src={pass_icon} alt="" />
                        <input type="password" required placeholder='Password'/>
                    </div>
                </div>
                <div className="forgot-password">Forgot Password ?<span>Click Here!</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Log In</div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup
