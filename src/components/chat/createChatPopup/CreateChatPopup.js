import React, { Component } from "react";
import "./CreateChatPopup.css";

export class CreateChatPopup extends Component {
  render() {
    return (
      <div className="create-chat-popup">
        <form className="d-flex flex-column justify-content-center align-items-center">
          <div className="form-group d-flex flex-column justify-content-center align-items-center">
            <label for="inputChatTitle">Введите нахвание чата</label>
            <input
              type="text"
              className="form-control"
              id="inputChatTitle"
              placeholder="Enter login"
            />
          </div>
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    );
  }
}
