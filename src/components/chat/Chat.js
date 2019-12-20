import React, { Component } from "react";
import { DialogList } from "./dialogList/DialogList";
import { MessagesList } from "./messagesList/MessagesList";
import { CreateChatButton } from "./createChatButton/CreateChatButton";
import { CreateChatPopup } from "./createChatPopup/CreateChatPopup";
import "./Chat.css";

export class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid  d-flex flex-column justify-content-center align-items-center chat-background">
        <div className="container chat-container">
          <div className="row chat-row">
            <div className="col-4 dialog-list-block">
              <DialogList uuid={this.props.uuid} />
            </div>
            <div className="col-8 messages-list-block">
              <MessagesList />
            </div>
          </div>
          <CreateChatButton />
          <CreateChatPopup />
        </div>
      </div>
    );
  }
}
