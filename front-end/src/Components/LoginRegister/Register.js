import axios from "axios"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Image1 from '../../Assets/image1.svg';

const Login = (props) => {
    
    //States
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    

    const registerUser = (event) =>{
        event.preventDefault();
        console.log("Register")
        axios.post("http://localhost:3001/register", {
            username: name,
            password:password,
            email: email,
        })
        .then(response => {
            console.log("failed 2")
            if(response.data==0)
            {
                history.push("/registration-failed")
            }
            else{
                history.push({pathname: "/Verify", state: response.data})
            }
        });
    };

    return (
        <div className = "login">
            <div className = "login-navbar">
                <div className = "login-navbar-left">
                    <img />
                </div>
                <div className = "login-navbar-right">
                    <button className = "button-unclicked">Home</button>
                    <button className = "button-unclicked">Login</button>
                    <button className = "button-clicked">Register</button>
                </div>
            </div>
            <div className = "main-login-content">
                <div className = "main-login-content-inner">
                    <div className = "login-left">
                        <form className = "login-form" onSubmit={registerUser}>
                            <h1 className = "login-title">Register</h1>
                            <input className = "login-element" type='text' placeholder = 'Add full name' value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className = "login-element" type='email' placeholder = 'Add email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input className = "login-element" type='password' placeholder = 'Add password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className = "login-misc">
                                <div className = "login-misc-4">
                                    <a className = "login-misc-1">Already have an account?  </a>
                                    <a className = "login-misc-2">Click Here</a>
                                </div>
                                <input className = "login-misc-3" type = 'submit' value =  'REGISTER'></input>
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