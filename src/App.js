import React, { Component } from "react";
import { Login } from "./components/login/Login";
import { Chat } from "./components/chat/Chat";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      uuid: "123"
    };

    this.login = this.login.bind(this);
  }

  login(uuid) {
    this.setState({ uuid });
  }
  render() {
    var content =
      this.state.uuid === "" ? (
        <Login login={this.login} />
      ) : (
        <Chat uuid={this.state.uuid} />
      );
    return <div>{content}</div>;
  }
}
