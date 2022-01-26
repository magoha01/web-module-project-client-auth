import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/login';
import Logout from './components/logout';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriends';


function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
          <div> 
            <h2>Friends Database</h2>
              <nav>
              <Link className='navLink' to="/login">Login</Link>
              <Link className='navLink' to="/logout">Logout</Link>
              <Link className='navLink' to="/friendslist">FriendsList</Link>
              <Link className='navLink' to="/addfriends">AddFriends</Link>
              </nav>
              {
                isLoggedIn && <p>Welcome {localStorage.getItem("username")}</p>
              }
          </div>
            <Switch> 
              <Route path="/logout" component={Logout} />
              <Route path="/friendslist" component={FriendsList}/>
              <Route path="/addfriends" component={AddFriends}/>
              <Route path="/login" component={Login} />
              <Route path="/" component={Login} />
          </Switch>
        </div>
    </Router>
  
  );
}

export default App;
