import React, { useState } from "react";
import "./SignupData.css"
// import email from "../Assets/email.png"
// import person from "../Assets/person.png"
// import password from "../Assets/password.png"

function SignupData() {
    const [action, setAction] = useState("Sign Up");
    return (
        <>
            <div className="wrap"></div >
            <div className="cont">
                <div className="header1">
                    <div className="text1">{action}</div>
                    <div className="unerline1"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="inp">
                        {/* <img src={person} alt="" /> */}
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Name" />
                    </div>}

                    <div className="inp">
                        {/* <img src={email} alt="" /> */}
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="inp">
                        {/* <img src={password} alt="" /> */}
                        <i class="fa-solid fa-key"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === "Sign Up" ? <div></div> : <div className="forgot">Forgot Password?<span> Click Here</span></div>}

                <div className="submit-cont">
                    <div className={action === "Login" ? "sub gray" : "sub"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "sub gray" : "sub"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </>
    )
}

export default SignupData;