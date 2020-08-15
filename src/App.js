import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

import Chat from "./Chat";
import Login from './Login';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {user ? (
          <h1>rfgdfdfg</h1>
        ): (
          <>
        <Header />
        <div className="app__body">
          <Sidebar />
              <Switch>
                <Route path="/room/:romId">
                <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
        </div>
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
