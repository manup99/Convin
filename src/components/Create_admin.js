import React, { Component } from 'react';
import {register} from '../actions/Auth';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom'

class Create_admin extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password1:'',
            password2:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        if(this.state.password1!=this.state.password2){
            alert("password do not match with each other!")
        }
        else{
            this.props.register(this.state.username,this.state.email,this.state.password1)
             }
    }
    change=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        if(this.props.auth.isAuthenticated){
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
                        <label>Enter Your email:</label>
                        <input type="email" name="email" onChange={this.change} value={this.state.email}/>
                        <label>Enter Your Password:</label>
                        <input type="password" name="password1" onChange={this.change} value={this.state.password1}/>
                        <label>Enter Your Password:</label>
                        <input type="password" name="password2" onChange={this.change} value={this.state.password2}/>
                        
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        }

    }
}
Create_admin.propTypes={
    register:PropTypes.func.isRequired,
    auth:PropTypes.object
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,{register})(Create_admin);