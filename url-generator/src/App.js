import React, { Component } from 'react';
import Loginpage from './containers/Loginpage';
import Homepage from './containers/Homepage';
import {Route,Router,browserHistory} from 'react-router';

class App extends Component {
  
  state = {
    isLogin: false
  }

  setLoginStatus = (stat) => {
    this.setState({
      isLogin: stat
    });
  }
  render() {
    console.log(this.state)
    return (
      <Router history={browserHistory}>
        <Route path="/" component={(props) => <Homepage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus}/>} />
        <Route path="/login" component={(props) => <Loginpage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus}/>} />
      </Router>
    );
  }
}

export default App;
