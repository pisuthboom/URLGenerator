import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{color:'white',background:'#18BC9C'}}>
                    <br/><br/><br/>
                    <h1 className="display-3">History Of Shortening</h1>
                </Jumbotron>
            </div>
        );
    }
};

export default Header;