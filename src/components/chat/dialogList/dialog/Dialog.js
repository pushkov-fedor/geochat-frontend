import React, { Component } from "react";
import "./Dialog.css";

export class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dialog-container d-flex align-items-center justify-content-center">
        <div className="dialog-card">
          <div className="group-title-pane d-flex align-items-center">
            <h1 className="group-title">{this.props.title}</h1>
          </div>
          <div className="last-message-pane d-flex align-items-center">
            <p className="last-message">
              <span className="dark">{this.props.author}</span>:{" "}
              {this.props.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
