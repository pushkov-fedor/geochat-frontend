import React, { Component } from "react";
import "./Dialog.css";

export class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dialog-container d-flex align-items-center justify-content-center">
        <div className="dialog-card d-flex flex-column justify-content-start">
          <div className="title-pane d-flex flex-column justify-content-center">
            <h1 className="title">{this.props.title}</h1>
          </div>
          <div className="message-pane d-flex">
            <p className="align-self-center message">
              <span className="author-dark">{this.props.author}:</span>{" "}
              {this.props.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
