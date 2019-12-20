import React, { Component } from "react";
import "./CreateChatButton.css";

export class CreateChatButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="create-chat-button d-flex justify-content-center align-items-center"
        onClick={() => {
          this.props.toggleCreateChatPopup();
          this.props.toggleReloadDialogList();
        }}
      >
        <i class="fas fa-plus create-chat-button-plus-icon"></i>
      </div>
    );
  }
}
