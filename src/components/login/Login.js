import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      submit: false,
      showAlert: false
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleLoginChange(e) {
    this.setState({ login: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.login !== "" && this.state.password !== "") {
      var url = "http://192.168.0.110/api/login";
      var body = { username: this.state.login, pass: this.state.password };

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          console.log(xhr.responseText);
        }
      };
      xhr.send(JSON.stringify(body));
      // this.setState({ submit: true });
    } else {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 3000);
    }
  }

  render() {
    return (
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center login-container"
        style={{ marginLeft: this.state.submit ? "100vw" : "0" }}
      >
        <div
          class="alert alert-danger"
          role="alert"
          style={{
            position: "absolute",
            top: "20%",
            opacity: this.state.showAlert ? "100%" : "0"
          }}
        >
          Please, fill in login and password fields.
        </div>
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={this.onSubmit}
        >
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
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    );
  }
}
