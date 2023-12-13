import React, { useState } from 'react'
import "./LoginSignup.css";
import email_icon from "../Assets/mail.png";
import pass_icon from "../Assets/pass.png";
import user_icon from "../Assets/user.png";



const LoginSignup = () => {

    const [action,setAction] = useState("Log In");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
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
                    <div className={action==="Log In" ? "submit gray" : "submit"}>Sign Up</div>
                    <div className={action==="Sign Up" ? "submit gray" : "submit"}>Log In</div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup
