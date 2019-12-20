import React, { Component } from "react";
import "./MessagesList.css";

export class MessagesList extends Component {
  render() {
    return (
      <div className="messages-list-background">
        <div className="messages-list-inner-block"></div>
        <div className="user-input-block">
          <form className="user-input-message-form d-flex flex-direction-row align-items-center justify-content-start">
            <div className="user-input-message-wrapper d-flex flex-direction-row align-items-center justify-content-center">
              <input
                type="text"
                className="user-input-message"
                placeholder="Type something and send..."
              ></input>
            </div>
            <div className="user-input-send-button-wrapper d-flex flex-direction-row align-items-center justify-content-start">
              <button type="submit" className="user-input-send-button">
                <i class="fas fa-paper-plane user-input-send-button-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
