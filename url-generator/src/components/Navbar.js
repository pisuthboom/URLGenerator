import React, { Component } from 'react';
import {Link} from 'react-router';

import {Button} from 'reactstrap';
class Navbar extends Component {
    signOut = () => {
        this.props.setLoginStatus(false);
    }
    render() {
        let a = <Link to="/login" style={{color: 'white'}} activeStyle={{color: 'white'}}>Sign In</Link>
        if(this.props.isLogin){
            a = <Button onClick={this.signOut}>Sign out</Button>
        }
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <Link to="/" style={{color: 'white'}} activeStyle={{color: 'white'}}>URL Generator</Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                {a}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
        
    }
}

export default Navbar;