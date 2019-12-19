import React, { Component } from "react";
import { DialogList } from "./dialogList/DialogList";
import "./Chat.css";

export class Chat extends Component {
  render() {
    return (
      <div className="container-fluid  d-flex flex-column justify-content-center align-items-center chat-background">
        <div className="container chat-container">
          <div className="row chat-row">
            <div className="col-4 dialog-list-block">
              <DialogList />
            </div>
            <div className="col-8">BBBB</div>
          </div>
        </div>
      </div>
    );
  }
}
