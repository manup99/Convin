import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login,logout} from '../actions/Auth'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        this.props.login(this.state.username,this.state.password)
    }
    change=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        if(this.props.isAuthenticated){
            return(
                <div>
                 <Redirect to="/chart" />
                </div>
                 
            )
        }
        else{
            return (
                <div>
                    <form onSubmit={this.submit}>
                        <label>Enter Your Username:</label>
                        <input type="text" name="username" onChange={this.change} value={this.state.username}/>
                        <label>Enter Your Password:</label>
                        <input type="password" name="password" onChange={this.change} value={this.state.password}/>
                        <button type="submit">Login</button>
                    </form>
                    <button><Link to="/register">Register</Link></button>
                </div>
            );
        }

    }
}
Login.propTypes={
    loginuser:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    auth:PropTypes.object,
    logout:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    auth:state.auth
})

export default connect(mapStateToProps,{login,logout})(Login);