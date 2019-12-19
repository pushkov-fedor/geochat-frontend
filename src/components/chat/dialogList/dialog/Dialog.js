import React, { Component } from "react";
import "./Dialog.css";

export class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-start dialog-container">
        <div className="title-pane d-flex flex-column justify-content-center">
          <h1 className="title">{this.props.title}</h1>
        </div>
        <div className="message-pane">
          <span className="author-dark">{this.props.author}:</span>{" "}
          {this.props.message}
        </div>
      </div>
    );
  }
}
