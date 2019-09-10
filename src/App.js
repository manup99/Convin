import React,{Component} from 'react';

import Routing from './components/Routing'
import {loaduser} from './actions/Auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import store from './store'
class App extends Component{
  componentDidMount(){
    store.dispatch(loaduser())
  }
  render(){
    return(
      <div>
        <Routing />
      </div>

    )
  }
}
App.propTypes={
  loaduser:PropTypes.func.isRequired
}

export default connect(null,{loaduser})(App);
