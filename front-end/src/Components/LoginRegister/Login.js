import axios from "axios"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";

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
        <div className="wholeLoginPage">
            <div className="title-container">
                <div className="titleLogin">Welcome back, please log in</div>
            </div>
            <div className='middle'>
                <div className="leftSideLogin">
                    <form className='add-form' onSubmit={loginUser}>
                        <div className='email-fieldLogin'>
                            <label className="emailLogin">Email: </label>
                            <input className="email-enterLogin" type='email' placeholder = 'Add email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='password-fieldLogin'>
                            <label className="passwordLogin">Password: </label>
                            <input className="password-enterLogin" type='password' placeholder = 'Add password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="loginSubmitLogin"><input type = 'submit' value =  'LOGIN' className='loginButtonLogin'></input></div>
                        
                    </form>
                    <div className="redirectToRegisterLogin">
                        Don't have an account already? 
                        <a className="loginHereRedirectButton" href="/registration"> Register here  </a>
                    </div>
                </div>
                <div className="rightSideLogin">
                    <div className="imageLoginContainer">
                        <p>Logo Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login