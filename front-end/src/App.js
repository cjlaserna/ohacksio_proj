import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register'
import LoginError from './Components/LoginRegister/LoginError';
import RegisterError from './Components/LoginRegister/RegisterError'
import Verification from './Components/LoginRegister/Verification';
import MenuBar from './Components/MenuBar';
import GoogleMap from './Components/Maps/GoogleMap';
import Map_Page from './Components/Maps/Map_Page';
import Dashboard from './Components/Dashboard/Dashboard';

import Errands from './Components/UserPages/Errands/Errands.js';

function App() {
  return (
    <Router>
      <MenuBar/>
    <Switch>
      <Route exact path="/" activeClassName='Nav__active'>
        <Dashboard/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

      <Route exact path="/registration">
        <Register/>
      </Route>
    </Switch>
    <Route exact path="/login-failed">
      <LoginError/>
    </Route>

    <Route exact path="/registration-failed">
      <RegisterError/>
    </Route>

    <Route exact path="/map">
      <Map_Page/>
    </Route>

    <Route exact path="/verify">
      <Verification/>
    </Route>

    <Route exact path="/errands">
      <Errands/>
    </Route>

    </Router>
  );
}

export default App;