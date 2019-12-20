import React, { Component } from "react";
import { Dialog } from "./dialog/Dialog";
import "./DialogList.css";

export class DialogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogs: []
    };
  }

  componentDidMount() {
    var url = `http://192.168.0.110/api/user/chat/${this.props.uuid}`;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    var self = this;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const dialogs = JSON.parse(xhr.responseText);
        self.setState({ dialogs });
      }
    };
    xhr.send();
  }

  render() {
    var content = this.state.dialogs.map(dialog => {
      return (
        <Dialog
          title={dialog.chatTitle}
          author={dialog.lastAuthor}
          message={dialog.lastMessage}
        />
      );
    });

    return (
      <div className="dialog-list-container">
        {/* <Dialog
          title="Трэпхата"
          author="Fedya"
          message="привет как дела чекавобляблябля"
        /> */}
        {content}
      </div>
    );
  }
}
