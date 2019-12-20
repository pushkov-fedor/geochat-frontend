import React, { Component } from "react";
import "./CreateChatButton.css";

export class CreateChatButton extends Component {
  render() {
    return (
      <div className="create-chat-button d-flex justify-content-center align-items-center">
        <i class="fas fa-plus create-chat-button-plus-icon"></i>
      </div>
    );
  }
}
