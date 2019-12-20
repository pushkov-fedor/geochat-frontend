import React, { Component } from "react";
import { Message } from "./message/Message";
import { UserInput } from "./userInput/UserInput";
import "./MessagesList.css";

export class MessagesList extends Component {
  render() {
    return (
      <div className="messages-list-background">
        <div className="messages-list-inner-block">
          <Message />
        </div>
        <div className="user-input-block">
          <UserInput />
        </div>
      </div>
    );
  }
}
