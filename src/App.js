import React, { Component } from "react";
import { Login } from "./components/login/Login";
import { Chat } from "./components/chat/Chat";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      uuid: "ab92b1f3-4862-49c8-8292-167dc879f6e7"
    };

    this.login = this.login.bind(this);
  }

  login(uuid) {
    this.setState({ uuid });
  }
  render() {
    return (
      <div>
        <Login login={this.login} />
        <Chat uuid={this.state.uuid} />
      </div>
    );
  }
}
