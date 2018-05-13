import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Generator from '../components/Generator';
import Footer from '../components/Footer';
import axios from 'axios';
import History from '../components/History';

class Homepage extends Component {

  getShortenLink = (url) => {
    
    let l = url;
    if (!url.includes('https://')){
      l = 'https://'+l;
    }
    axios.post('http://localhost:3001/', {
          link: l
        })
        .then((response) => {
          let shortenUrl = response.data.data.url;
          let realUrl = response.data.data.long_url;
          let hash = response.data.data.hash;
          console.log(response);
          console.log(this.props)
          axios.post('http://localhost:3001/numclick', {
                link: shortenUrl
          })
          .then((clickresponse) => {
              let click = clickresponse.data.data.clicks[0].user_clicks;
              if(this.props.isLogin){
                this.props.setHistory(shortenUrl,realUrl,hash,click);
              }
          })
          .catch(function (error) {
                console.log(error);
          });
          this.props.setShorten(true,shortenUrl);
        })
        .catch(function (error) {
          console.log(error);
    });
  }

  render() {
    console.log(this.props);
    let history = ''
    if(this.props.isLogin){
      history = <History {...this.props} isLogin={this.props.isLogin} history={this.props.history} user={this.props.user}/>  
    }
    return (
      <div>
        <Navbar {...this.props} isLogin={this.props.isLogin} setLoginStatus={this.props.setLoginStatus} setUser={this.props.setUser} user={this.props.user}/>
        <Generator {...this.props} isShorten={this.props.isShorten} shortenUrl={this.props.shortenUrl}
          getShortenLink={this.getShortenLink} setShorten={this.props.setShorten} />
        {history}
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
