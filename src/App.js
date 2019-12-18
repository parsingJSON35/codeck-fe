import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  loginUser = () => {
    this.setState({loggedIn: true})
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState, this.state);
    
  //   return nextState !== this.state
  // }

  render() {
    let { loggedIn } = this.state
    console.log(loggedIn);

    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path='/'>
              { loggedIn ? <Home /> : <Redirect to='/login' /> }
            </Route>
            <Route path='/login'>
              <Login handleSubmit={this.loginUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
