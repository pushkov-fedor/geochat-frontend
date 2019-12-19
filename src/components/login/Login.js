import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginChange(e) {
    this.setState({ login: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center login-container">
        <form className="d-flex flex-column justify-content-center align-items-center">
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control"
              value={this.state.login}
              onChange={this.handleLoginChange}
              placeholder="Enter login"
            />
          </div>
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              className="form-control"
              onChange={this.handlePasswordChange}
              value={this.state.password}
              placeholder="Enter password"
            />
          </div>
          <button type="button" class="btn btn-login">
            Login
          </button>
        </form>
      </div>
    );
  }
}
