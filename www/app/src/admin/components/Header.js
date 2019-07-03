import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


import { cookie } from '../../config/Config.json';
import { removeCookie } from '../../helpers/Cookie';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      open: false, isLogged: true 
    };

    this.ref = React.createRef();
  }

  handleDropdownToggle = (e) => {
    e.preventDefault();
    this.setState({ 
      open: !this.state.open 
    });
  };

  handleLogout = (e) => {
    e.preventDefault();
    removeCookie(cookie.name);
    
    this.setState({ 
      open: !this.state.open, isLogged: false
    });    
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.click(this.ref.current.value);
  };

  onSubmission = (event) => {
    event.preventDefault();
    this.props.click(this.ref.current.value);
    this.ref.current.value = '';
  }
  
  render() {
    if (this.state.isLogged) {
      return (
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <Link className="navbar-brand mr-1" to="/">App</Link>
          
          <form onSubmit={this.onSubmission} className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input onChange={this.handleSearch} ref={this.ref} type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button onClick={this.handleSearch} className="btn btn-primary" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          
          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" onClick={this.handleDropdownToggle} to="#">
                {this.props.user} <i className="fas fa-user-circle fa-fw"></i>
              </Link> 
              <div className={this.state.open ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"}> 
                <Link className="dropdown-item" onClick={this.handleLogout} to="#">Logout</Link> 
              </div>
            </li>
          </ul>
        </nav>
      );     
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Header;