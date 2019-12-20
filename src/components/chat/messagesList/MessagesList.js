import React, { Component } from "react";
import "./MessagesList.css";

export class MessagesList extends Component {
  render() {
    return (
      <div className="messages-list-background">
        <div className="messages-list-block"></div>
        <div className="user-input-block"></div>
      </div>
    );
  }
}
