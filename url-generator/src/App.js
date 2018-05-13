import React, { Component } from 'react';
import Loginpage from './containers/Loginpage';
import Homepage from './containers/Homepage';
import {Route,Router,browserHistory} from 'react-router';
import Statpage from './containers/Statpage';
import Registerpage from './containers/Registerpage';
import {base} from './components/base';

class App extends Component {
  
  state = {
    isLogin: false,
    isShorten: false,
    shortenUrl: '',
    history:[],
    user:''
  }

  componentDidMount(){
    base.syncState('History',{
        context: this,
        state: 'history',
        asArray: true
    })

  }

  setUser = (username) => {
    this.setState({
      user: username
    });
  }

  setHistory = (url,longurl,hash,click) => {
    this.setState({
      history: this.state.history.concat({
          shortlink: url,
          longlink: longurl,
          hash: hash,
          username: this.state.user,
          clicks: click
      })
    });
  }

  setLoginStatus = (stat) => {
    this.setState({
      isLogin: stat
    });
  }
  setShorten = (stat,sUrl) => {
    this.setState({
      isShorten: stat,
      shortenUrl: sUrl
    })
  }
  render() {
     
    return (
      <Router history={browserHistory}>
        <Route path="/" component={(props) => <Homepage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus} setUser={this.setUser} user={this.state.user} history={this.state.history} isShorten={this.state.isShorten} setShorten={this.setShorten} setHistory={this.setHistory} shortenUrl={this.state.shortenUrl}/>} />
        <Route path="/login" component={(props) => <Loginpage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus} setUser={this.setUser}/>} />
        <Route path="/stat" component={(props) => <Statpage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus} history={this.state.history} user={this.state.user} setUser={this.setUser}/>} />
        <Route path="/register" component={(props) => <Registerpage {...props} isLogin={this.state.isLogin} setLoginStatus={this.setLoginStatus} setUser={this.setUser}/>} />
      </Router>
    );
  }
}

export default App;
