import React, { Component } from 'react';
import '../css/style.css';
import {Form,FormGroup,Input} from 'reactstrap';
import {base} from '../components/base'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            tester: {
            },
            name:'',
            pass:''
        }
        this.changeUserInput = this.changeUserInput.bind(this);
        this.changePassInput = this.changePassInput.bind(this);
        this.checkUserPass = this.checkUserPass.bind(this);
    
    }

    componentDidMount(){
        this.testerRef = base.syncState('tester',{
            context: this,
            state: 'tester' 
        });
    }

    changeUserInput(event){
        this.setState({
            name : event.target.value
        });
    }

    changePassInput(event){
        this.setState({
            pass : event.target.value
        });
    }
    
    checkUserPass(event){
        event.preventDefault();
        if(this.state.name==this.state.tester.username || this.state.name==this.state.tester.email){
            if(this.state.pass==this.state.tester.password){
                alert("Login Successful!");
                this.props.setLoginStatus(true);
                
                this.props.router.push({
                    pathname: '/'
                })
            }
        }
    }

    render() {
        return (
            <div className="frame">
                <div className="container">
                    <br/>
                    <h1 className="text-center">SIGN IN</h1>
                    <br/>
                    <Form onSubmit={this.checkUserPass}>
                        <FormGroup>
                            <Input type="text" onChange={this.changeUserInput} value={this.state.name}  placeholder="Email address or username" /><br/>
                            <Input type="password" onChange={this.changePassInput} value={this.state.pass} placeholder="Password" /><br/>
                            <Input type="submit" value="Log in" style={{color: 'white',backgroundColor:'green'}}/>
                        </FormGroup>
                        <h6>For Admin,</h6>
                        <p>
                            Email: {this.state.tester.email}<br/>
                            Username: {this.state.tester.username}<br/>
                            Password: {this.state.tester.password}
                        </p>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;