import React, { Component } from "react";
import "./Message.css";

export class Message extends Component {
  render() {
    return (
      <div className="message-wrapper d-flex align-items-center">
        <div className="message-card d-flex align-items-center">
          <p className="message">
            <span className="dark">Fedya</span>: Privet kak dela???Privet kak
            dela???Privet kak dela???Privet kak dela???Privet kak dela???Privet
            kak dela???Privet kak dela???Privet kak dela???Privet kak
            dela???Privet kak dela???Privet kak dela???Privet kak dela???
          </p>
        </div>
      </div>
    );
  }
}
