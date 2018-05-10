import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Generator from '../components/Generator';
import Footer from '../components/Footer';
import axios from 'axios'
class Homepage extends Component {

  componentDidMount() {
    // axios.post('http://localhost:3001/', {
    //   link: 'http://www.google.com'
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  
    axios.get('http://localhost:3001/2Ix1T5I')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} isLogin={this.props.isLogin} setLoginStatus={this.props.setLoginStatus}/>
        <Generator/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
