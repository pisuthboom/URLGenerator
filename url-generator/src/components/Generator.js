import React, { Component } from 'react';
import {Form,Input,Button} from 'reactstrap';

class Generator extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            url: ''
        }
        this.printShorten = this.printShorten.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
        this.clearShorten = this.clearShorten.bind(this);
    }
    
    changeUrl(event){
        this.setState({
            url: event.target.value
        });
    }
    
    printShorten(event){
        event.preventDefault();
        this.props.getShortenLink(this.state.url);
    }

    clearShorten(event){
        event.preventDefault();
        this.props.setShorten(false,'');
        this.setState({
            url: ''
        })
    }

    render() {
        let generator = <Form onSubmit={this.printShorten}>
                            <Input type="text" onChange={this.changeUrl} value={this.state.url} placeholder="Paste a link to shorten it" />
                            <br/>
                            <Button>
                                <Input type="submit" value="SHORTEN" style={{color:'white',background: 'none',border: 'none'}}/>
                            </Button>
                        </Form>
        if(this.props.isShorten){
            generator = <Form onSubmit={this.clearShorten}>
                            <Input type="text" value={this.props.shortenUrl} ></Input>
                            <br/>
                            <Button>
                                <Input type="submit" value="CLEAR" style={{color:'white',background: 'none',border: 'none'}}/>
                            </Button>
                        </Form>
        }
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-uppercase mb-0">URL Generator</h1>
                    <br/><br/>
                    {generator}
                </div>
            </header>
        );
    }
}
export default Generator;