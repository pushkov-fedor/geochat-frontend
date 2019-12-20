import React, { Component } from "react";
import { Login } from "./components/login/Login";
import { Chat } from "./components/chat/Chat";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      uuid: "e1373384-d416-4270-8639-81e22a5c5c49"
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
