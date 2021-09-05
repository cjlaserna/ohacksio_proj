import axios from "axios"
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
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
        <div className="wholeRegisterPage">
            <div className="title-container-register">
                <div className="titleRegister">Welcome! Please register to gain access to our services</div>
            </div>
            <div className='middleRegister'>
                <div className="leftSideRegister">
                    <form className='add-form' onSubmit={registerUser}>
                        <div className="name-fieldRegister">
                            <label className="nameRegister">Name: </label>
                            <input className="name-enterRegister" type='text' placeholder = 'Add full name' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='email-fieldRegister'>
                            <label className="emailRegister">Email: </label>
                            <input className="email-enterRegister" type='email' placeholder = 'Add email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='password-fieldRegister'>
                            <label className="passwordRegister">Password: </label>
                            <input className="password-enterRegister" type='password' placeholder = 'Add password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="registerSubmitRegister"><input type = 'submit' value =  'REGISTER' className='registerButtonRegister'></input></div>
                    </form>
                    <div className="redirectToLoginRegister">
                        Have an account already? 
                        <a className="registerHereRedirectButton" href="/login"> Login here  </a>
                    </div>
                </div>
                <div className="rightSideRegister">
                </div>
            </div>
        </div>
    )
}

export default Login