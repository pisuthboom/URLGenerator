import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Generator from '../components/Generator';
import Footer from '../components/Footer';
import axios from 'axios';

class Homepage extends Component {

  // componentDidMount(){
  //   axios.get('http://localhost:3001/numclick/2rA7mOE')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  getShortenLink = (url) => {
    axios.post('http://localhost:3001/', {
          link: 'http://'+url
        })
        .then((response) => {
          let shortenUrl = response.data.data.url;
          let realUrl = response.data.data.long_url;
          let hash = response.data.data.hash;
          console.log(response);
          console.log(this.props)
          this.props.setHistory(shortenUrl,realUrl,hash);
          this.props.setShorten(true,shortenUrl);
        })
        .catch(function (error) {
          console.log(error);
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <Navbar {...this.props} isLogin={this.props.isLogin} setLoginStatus={this.props.setLoginStatus} setUser={this.props.setUser} user={this.props.user}/>
        <Generator {...this.props} isShorten={this.props.isShorten} shortenUrl={this.props.shortenUrl}
          getShortenLink={this.getShortenLink} setShorten={this.props.setShorten} />
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
