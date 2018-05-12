import React, { Component } from 'react';
import {Link} from 'react-router';
import {Button, Label} from 'reactstrap';

class Navbar extends Component {
    signOut = () => {
        this.props.setLoginStatus(false);
        this.props.setUser('');
    }

    render() {
        console.log(this.props);
        let statisticButton = '';
        let registerButton = <Button>
                                <Link to="/register" style={{color: 'white'}} activeStyle={{color: 'white'}}>Register</Link>
                            </Button>
        let loginButton =   <Button>
                                <Link to="/login" style={{color: 'white'}} activeStyle={{color: 'white'}}>Sign In</Link>
                            </Button>
        if(this.props.isLogin){
            statisticButton =   <Button>
                                    <Link to="/stat" style={{color: 'white'}} activeStyle={{color: 'white'}}>Statistic</Link>
                                </Button>
            loginButton = <Button onClick={this.signOut}>Sign out</Button>
            registerButton = <Label>{this.props.user}</Label>
        }
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <Link to="/" style={{color: 'white'}} activeStyle={{color: 'white'}}>URL Generator</Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        {statisticButton}
                            <li className="nav-item mx-0 mx-lg-1">
                                {registerButton}
                                {loginButton}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
        
    }
}

export default Navbar;