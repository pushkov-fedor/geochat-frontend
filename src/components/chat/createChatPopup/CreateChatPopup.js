import React, { Component } from "react";
import "./CreateChatPopup.css";

export class CreateChatPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatTitle: ""
    };

    this.handleChatTitleChange = this.handleChatTitleChange.bind(this);
    this.submitCreateChat = this.submitCreateChat.bind(this);
  }

  handleChatTitleChange(e) {
    this.setState({ chatTitle: e.target.value });
  }

  submitCreateChat(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.state.chatTitle);
    return (
      <div className="create-chat-popup d-flex flex-column justify-content-center align-items-center">
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          onSubmit={this.submitCreateChat}
        >
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control"
              id="inputChatTitle"
              value={this.state.chatTitle}
              onChange={this.handleChatTitleChange}
              placeholder="Enter chat name"
            />
          </div>
          <button type="submit" className="btn btn-login">
            Create
          </button>
        </form>
      </div>
    );
  }
}
