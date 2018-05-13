import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import History from '../components/History';
import Header from '../components/Header';

class Statpage extends Component {

  render() {
    console.log(this.props.history);
    return (
      <div>
        <Navbar {...this.props} isLogin={this.props.isLogin} setLoginStatus={this.props.setLoginStatus} setUser={this.props.setUser} user={this.props.user}/>
        <Header/>
        <History {...this.props} history={this.props.history} user={this.props.user}/>        
        <Footer/>
      </div>
    );
  }
}

export default Statpage;
