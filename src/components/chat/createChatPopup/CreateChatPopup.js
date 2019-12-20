import React, { Component } from "react";
import "./CreateChatPopup.css";

export class CreateChatPopup extends Component {
  render() {
    return (
      <div className="create-chat-popup d-flex flex-column justify-content-center align-items-center">
        <form className="d-flex flex-column justify-content-center align-items-center">
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <input
              type="text"
              className="form-control"
              id="inputChatTitle"
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
