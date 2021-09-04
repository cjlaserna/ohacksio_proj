const Error = () => {
    return (
        <div>
            <h2>Login Failed</h2>
            <h4>Your login was unsuccessful</h4>
            <p>
                If you have not already created an account, click
                <a className = "loginlink" href="/registration"> here</a>
                . If you already have an account, please try to sign in again 
                <a className = "loginlink" href="/login"> here</a> 
                , or contact us.
            </p>
        </div>
    )
}

export default Error
