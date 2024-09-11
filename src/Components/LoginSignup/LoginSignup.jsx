import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import email_icon from "../Assets/mail.png";
import pass_icon from "../Assets/pass.png";
import user_icon from "../Assets/user.png";
import axios from "axios";

const LoginSignup = () => {
  const API = "https://jsonplaceholder.typicode.com";
  //? Axios using Promises
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }, []);

  //? Axios using Async and Await
  const getResData = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res.data.slice(0, 12));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getResData(`${API}/posts`);
  });
  const [action, setAction] = useState("Log In");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Log In" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" required placeholder="E-Mail" />
          </div>
          <div className="input">
            <img src={pass_icon} alt="" />
            <input type="password" required placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password ?<span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Log In" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Log In");
            }}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
