import React, { Component } from "react";
import { Login } from "./components/login/Login";
import { Chat } from "./components/chat/Chat";

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Chat /> */}
      </div>
    );
  }
}
