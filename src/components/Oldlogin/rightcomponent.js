import { useState } from "react";
import { Forgotpass } from "./forgotpass";
export function Rightcomponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handlChange = (event) => {
    setUserName(event.target.value);
    setPassword(event.target.value);
    // console.log("sss", password);
  };
  const handlsubmit = () => {
    alert(`username:${userName}\npassword:${password}`);
  };
  const handleForgotPass = () => {
    // alert("pass");
    <Forgotpass />;
  };
  return (
    <>
      <div>
        <div className="mainHeading">
          <h3>Sign In</h3>
          <h5>Sign in to your account</h5>
          <div className="d-flex">
            <button className="btnStyle">
              <span className="bi bi-google"></span> Sign in with Google
            </button>
            <button className="btnStyle">
              <span className="bi bi-apple"></span> Sign in with Apple
            </button>
          </div>
          <div className="mainDiv">
            <dl>
              <dt>Email address</dt>
              <dd>
                <input type="email" onChange={handlChange} value={userName}></input>
              </dd>
              <dt>Password</dt>
              <dd>
                <input type="password" onChange={handlChange} value={password}></input>
              </dd>
              <dd>
                <button onClick={handleForgotPass} className="fgpass">
                  <span className="forpassword">Forgot Password?</span>
                </button>
              </dd>
            </dl>
            <button className="signBtn" onClick={handlsubmit}>
              Sign In
            </button>
            <div className="footer">
              <h5>
                Don't have an account?<a>Register here</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
