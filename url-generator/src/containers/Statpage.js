import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import History from '../components/History';
import Header from '../components/Header';
import axios from 'axios';

class Statpage extends Component {

  componentDidMount(){
    
    // axios.get('http://localhost:3001/numclick/2rA7mOE')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render() {
    console.log(this.props.history);
    return (
      <div>
        <Navbar {...this.props} isLogin={this.props.isLogin} setLoginStatus={this.props.setLoginStatus}/>
        <Header/>
        <History {...this.props} history={this.props.history}/>        
        <Footer/>
      </div>
    );
  }
}

export default Statpage;
