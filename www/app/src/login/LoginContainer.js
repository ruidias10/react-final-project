import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Login from '../login/Login';
import config from '../config/Config.json';
import { setCookie, getCookie } from '../helpers/Cookie';

class LoginContainer extends Component {

  constructor(props) {
    super(props);

    this.config = config.cookie;
    this.cookie = getCookie(this.config.name);

    this.state={
      isLogin: false
    }
  }

  handleSubmit(email, password) {
    setCookie(this.config.name, email, this.config.dafaultTime);

    this.setState({
      isLogin: true
    })
  }

  render() {
    if (!this.state.isLogin) {
      return <Login onSubmit={ this.handleSubmit.bind(this) }/>;
      
    } else {
      return <Redirect to="/admin/movies" />;
    }

  }
}

export default LoginContainer;