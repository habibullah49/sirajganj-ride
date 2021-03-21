import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FinalDestination from './components/FinalDestination/FinalDestination';
import Destination from './components/Destination/Destination';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <PrivateRoute path="/destination">
            <Destination/>
          </PrivateRoute>
          <PrivateRoute path="/finalDestination">
            <FinalDestination/>
          </PrivateRoute>
          <Route path="*">
            <h1>404 - Not Found!</h1>
          </Route>
        </Switch>
      </Router >
      </UserContext.Provider>
  );
}

export default App;
