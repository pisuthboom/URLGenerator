import React, { Component } from 'react';
import {Form,Input,Button} from 'reactstrap';

class Generator extends Component{
    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-uppercase mb-0">URL Generator</h1>
                    <br/><br/>
                    <Form>
                        <Input type="text" placeholder="Paste a link to shorten it" />
                        <br/>
                        <Button>SHORTEN</Button>
                    </Form>
                </div>
            </header>
        );
    }
}
export default Generator;