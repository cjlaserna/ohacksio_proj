import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'
const Verification = () => {
    
    let location = useLocation();
    let history = useHistory();

    const [verificationCode, setVerificationCode] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        var secondsElapsed = Math.floor(Date.now()/1000) - parseInt((location.state.user.verCode).substr(5,), 36);
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
    
    return (
        <div>
            <div>
                <h1>Account Verification</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Enter your code here: </label>
                    <input className="password-enterRegister" type='text' placeholder = 'Add verification code' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)}/>
                </div>
                <input className="Verify" type = 'submit' value =  'Verify'></input>
            </form>
        </div>
    )
}

export default Verification
