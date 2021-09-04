import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'

function App() {
  return (
    <Router>
  
    <Route exact path="/">
      <h1>Dashboard</h1>
    </Route>

    <Route exact path="/login">
      <h1>Login</h1>
    </Route>

    <Route exact path="/registration">
      <h1>Registration</h1>
    </Route>

    <Route exact path="/login-failed">
      <h1>Login Failed</h1>
    </Route>

    <Route exact path="/registration-failed">
      <h1>Registration Failed</h1>
    </Route>
  
  </Router>
  );
}

export default App;