import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'

import './VerifyErrorStyles/verification.css'
import emailgraphic from '../../Assets/emailgraphic.svg'

const Verification = () => {
    
    let location = useLocation();
    let history = useHistory();

    const [verificationCode, setVerificationCode] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        var secondsElapsed = Math.floor(Date.now()/1000) - parseInt((location.state.user.verCode).substr(5,), 36);
        console.log(location.state.user)
        if(secondsElapsed<(60*5))
        {
            if(location.state.user.verCode == verificationCode)
            {
               console.log(location.state.user)
                axios.post("http://localhost:3001/signup", {
                user:location.state.user,
                })
                history.push("/login")
            }
             
            else
            {
                console.log("Incorrect Code")
            }
        }
       
        else{
            console.log("Sorry, your verification code has timed out.")

            
                    history.push("/registration")
            
        }

    }
    const resendVerification = (event) =>{
        event.preventDefault();
    }

    console.log(verificationCode)
    return (
        <div className="verify__wrapper">
            <div className="verify__title">
                <h1>Verify Your Account</h1>
            </div>

            <div className="verify__split">
                <div className="verify__left">
                    <div className="content">
                        <img src= {emailgraphic}></img>
                    </div>
                </div>
                <div className="verify__right">
                    <form className="verify__form" onSubmit={onSubmit}>
                        <div className="verify__box">
                            <label>Enter Verification Code</label>
                            <input className="password-enterRegister" type='text' placeholder = 'Enter Code' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}/>
                            { verificationCode !== '' ?
                            <input className="Verify" type = 'submit' value =  'Verify'></input> : <span></span> }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Verification
