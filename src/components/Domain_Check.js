import React, { Component } from 'react';
import axios from 'axios'
class Domain_Check extends Component {
    constructor(props){
        super(props)
        this.state={
          name:'',
          domain:''
        }
      }
      componentDidMount(){
        const config={
          headers:{
            "Content-Type":"application/json"
          }
        }
        axios.get('https://app.api.convin.ai/persons/invite//',config)
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.log(err)
        }
        )
      }
      check_domain_availability=(e)=>{
        e.preventDefault()
        const config={
          headers:{
            "Content-Type":"application/json"
          }
        }
        axios.get(`https://app.api.convin.ai/domains/availability/?name=${this.state.name}`,config)
        .then(
          res=>{
            console.log(res.data)
            this.setState({
              name:''
            })
            if(res.data.status==="error")
            {
              window.alert("Entered sub-domain is not available....")
            }
            else{
              window.alert("Entered sub-domain is available...")
            }
          }
        )
        .catch(err=>{
          console.log(err)
          window.alert("The entered sub-domain is not available")
        })
      }
      register_domain=(e)=>{
        e.preventDefault()
        const config={
          headers:{
            "Content-Type":"application/json"
          }
        }
        const body={
          'name':this.state.domain
        }
        axios.post('https://manu4.api.convin.ai/persons/',body,config)
        .then(res=>{
          window.alert("Domain name registered successfully!")
          console.log(res.data)
        })
        .catch(err=>{
          window.alert("Sorry this sub-domain name is already taken!")
          console.log(err)
        })
      }
      change=(e)=>{
      
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      render() {
        return (
          <div>
           
            <label style={{margin:'30px'}}>Check domain name availability:</label>
            <input type="text" name="name" onChange={this.change} value={this.state.name} /> 
            <button style={{marginBottom:'40px'}} onClick={this.check_domain_availability}>Check Availabililty of Sub-Domain</button><br />
            <label style={{margin:'50px'}}>Register your sub-domain:</label>
            <input type="text" onChange={this.change} name="domain" value={this.state.domain} />
            <button onClick={this.register_domain}>Register</button>
          </div>
        );
      }
    }

export default Domain_Check;