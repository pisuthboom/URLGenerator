import React, { Component } from 'react';
import '../css/style.css';
import {Form,FormGroup,Input} from 'reactstrap';
import {base} from '../components/base';
import {Link} from 'react-router';

class Loginpage extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            username:'',
            password:''
        }
        this.changeUserInput = this.changeUserInput.bind(this);
        this.changePassInput = this.changePassInput.bind(this);
        this.checkUserPass = this.checkUserPass.bind(this);
    
    }

    componentDidMount(){
        base.syncState('User',{
            context: this,
            state: 'users' 
        });
    }

    changeUserInput(event){
        this.setState({
            username : event.target.value
        });
    }

    changePassInput(event){
        this.setState({
            password : event.target.value
        });
    }
    
    checkUserPass(event){
        let isCorrect = false;
        this.state.users.map((user)=>{
            if(user.username==this.state.username||user.email==this.state.username){
                if(user.password==this.state.password){
                    isCorrect = true;
                }
            }
        });
        if(this.state.username&&this.state.password){
            if(isCorrect){
                alert("Login Successful!");
                
                this.props.setLoginStatus(true);
                this.props.setUser(this.state.username);
                this.props.router.push({
                    pathname: '/'
                })   
            }
            else{
                alert("Username or password are incorrect.");
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
                    <h1 className="text-center">SIGN IN</h1>
                    <br/>
                    <Form onSubmit={this.checkUserPass}>
                        <FormGroup>
                            <Input type="text" onChange={this.changeUserInput} value={this.state.username}  placeholder="Email address or username" /><br/>
                            <Input type="password" onChange={this.changePassInput} value={this.state.password} placeholder="Password" /><br/>
                            <Input type="submit" value="Log in" style={{color: 'white',backgroundColor:'green'}}/>
                        </FormGroup>
                        <p>Don't have an account? <Link to="/register">Sign Up Now</Link></p>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Loginpage;