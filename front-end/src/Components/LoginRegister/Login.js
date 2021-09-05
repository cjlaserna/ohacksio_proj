import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './LoginRegisterStyles/loginstyles.css'
import Image1 from '../../Assets/image1.svg'

const Login = () => {
    //States
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (event) =>{
        event.preventDefault();
        console.log("Login")
    };
    return (
        <div className = "login">
            <div className = "login-navbar">
                <div className = "login-navbar-left">
                    <img />
                </div>
                <div className = "login-navbar-right">
                    <button className = "button-unclicked">Home</button>
                    <button className = "button-clicked">Login</button>
                    <button className = "button-unclicked">Register</button>
                </div>
            </div>
            <div className = "main-login-content">
                <div className = "main-login-content-inner">
                    <div className = "login-left">
                        <form className = "login-form" onSubmit={loginUser}>
                            <h1 className = "login-title">Login</h1>
                            <input className = "login-element" type='email' placeholder = 'Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input className = "login-element" type='password' placeholder = 'Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className = "login-misc">
                                <div className = "login-misc-4">
                                    <a className = "login-misc-1">Don't have an account?  </a>
                                    <a className = "login-misc-2">Register Here</a>
                                </div>
                                <input className = "login-misc-3" type = 'submit' value =  'LOGIN'></input>
                            </div>
                        </form>
                    </div>
                    <div className = "login-right">
                        <img src = {Image1} />
                    </div>
                    </div>
                    <div>
                </div>
            </div>
        </div>
    )
}

export default Login
