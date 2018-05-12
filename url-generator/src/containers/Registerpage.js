import React, { Component } from 'react';
import '../css/style.css';
import {Form,FormGroup,Input,Label} from 'reactstrap';
import {base} from '../components/base';
import {Link} from 'react-router';

class Registerpage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            users: []
        }
        this.changeUsernameInput = this.changeUsernameInput.bind(this);
        this.changeEmailInput = this.changeEmailInput.bind(this);
        this.changePasswordInput = this.changePasswordInput.bind(this);
        this.changeConfirmPasswordInput = this.changeConfirmPasswordInput.bind(this);
        this.registerAccount = this.registerAccount.bind(this);
    }  
    componentDidMount(){
        base.syncState('User',{
            context: this,
            state: 'users',
            asArray: true
        })
    }
    changeUsernameInput(event){
        this.setState({
            username : event.target.value
        });
    }
    changeEmailInput(event){
        this.setState({
            email : event.target.value
        });
    }
    changePasswordInput(event){
        this.setState({
            password : event.target.value
        });
    }
    changeConfirmPasswordInput(event){
        this.setState({
            confirmpassword : event.target.value
        });
    }

    registerAccount(event){
        let isUsed = false;
        this.state.users.map((user)=>{
            if(user.username==this.state.username||user.email==this.state.email){
                isUsed = true;
            }
        });
        if(this.state.username&&this.state.email&&this.state.password&&this.state.confirmpassword){
            if(!isUsed){
                if(this.state.password==this.state.confirmpassword){
                    
                    this.setState({
                        users: this.state.users.concat({
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password
                        })
                    })
                    console.log(this.state.users);
                    alert("Register Successful!");
                    
                    this.props.setLoginStatus(true);
                    this.props.setUser(this.state.username);
                    this.props.router.push({
                        pathname: '/'
                    })
                }
                else{
                    alert("Password and Confirm-password are not matched.");
                }
            }
            else{
                alert("Username and Email are used already.");
            }
        }
        else{
            alert("Please fill all information.");
        }
        event.preventDefault()
    }

    render() {
        return (
            <div className="frame">
                <div className="container">
                    <br/>
                    <h1 className="text-center">Register</h1>
                    <br/>
                    <Form onSubmit={this.registerAccount}>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input type="text" onChange={this.changeUsernameInput} value={this.state.username}  placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" onChange={this.changeEmailInput} value={this.state.email}  placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" onChange={this.changePasswordInput} value={this.state.password}  placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Confirm Password</Label>
                            <Input type="password" onChange={this.changeConfirmPasswordInput} value={this.state.confirmpassword}  placeholder="Confirm password"/>
                        </FormGroup>
                        <br/>
                        <Input type="submit" value="Register" style={{color: 'white',backgroundColor:'green'}}/>
                        <br/>
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Registerpage;
