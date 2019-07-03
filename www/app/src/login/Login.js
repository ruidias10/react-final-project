import React, { Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputEmail = React.createRef();
    this.inputPassword = React.createRef();
  }

  componentDidMount() {
    this.inputEmail.current.autofocus = true; // set autofocus Email
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.inputEmail.current.value, 
      this.inputPassword.current.value
    );
  }   

  render() {
    return (
      <div className="container-fluid bgLight full">
        <div className="row justify-content-md-center">
          <div className="w-25 align-middle">
            <div className="text-center">
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" ref={this.inputEmail} name="inputEmail" className="form-control" placeholder="Email address" required />
                
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" ref={this.inputPassword} name="inputPassword" className="form-control" placeholder="Password" required />
                
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;