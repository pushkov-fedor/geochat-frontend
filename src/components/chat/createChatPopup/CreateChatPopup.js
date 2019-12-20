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
    if (this.state.chatTitle != "") {
      var url = `http://192.168.0.110/api/chat/${this.props.uuid}`;
      var body = {
        title: this.state.chatTitle,
        description: "",
        geoId: "12345",
        description: "100"
      };

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      var self = this;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
        }
      };
      xhr.send(JSON.stringify(body));
      self.props.toggleCreateChatPopup();
    }
  }

  render() {
    console.log(this.state.chatTitle);
    return (
      <div
        className="create-chat-popup d-flex flex-column justify-content-center align-items-center"
        style={{ bottom: this.props.showCreateChatPopup ? "35%" : "-50%" }}
      >
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
