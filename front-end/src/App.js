import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register'
import LoginError from './Components/LoginRegister/LoginError';
import RegisterError from './Components/LoginRegister/RegisterError'
import Map from './Components/Maps/Map';
import Verification from './Components/LoginRegister/Verification';
import GoogleMap from './Components/Maps/GoogleMap';


function App() {
  return (
    <Router>

    <Route exact path="/">
      <h1>Dashboard</h1>
    </Route>

    <Route exact path="/login">
      <Login/>
    </Route>

    <Route exact path="/registration">
      <Register/>
    </Route>

    <Route exact path="/login-failed">
      <LoginError/>
    </Route>

    <Route exact path="/registration-failed">
      <RegisterError/>
    </Route>

    <Route exact path="/map">
      <Map/>
    </Route>

    <Route exact path="/verify">
      <Verification/>

    </Route>

  </Router>
  );
}

export default App;
