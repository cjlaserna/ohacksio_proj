const Error = () => {
    return (
        <div>
            <h2>Registration Failed</h2>
            <h4>Your registration was unsuccessful</h4>
            <p>
                If you already have an account, click
                <a className = "loginlink" href="/login"> here</a>
                . If your information was correct, please try to register again 
                <a className = "loginlink" href="/registration"> here</a> 
                , or contact us.
            </p>
        </div>
    )
}

export default Error
