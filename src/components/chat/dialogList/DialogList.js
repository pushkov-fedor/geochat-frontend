import React, { Component } from "react";
import { Dialog } from "./dialog/Dialog";
import "./DialogList.css";

export class DialogList extends Component {
  render() {
    return (
      <div className="dialog-list-container">
        <Dialog
          title="Трэпхата"
          author="Fedya"
          message="привет как дела чекавобляблябля"
        />
        <Dialog title="Privet" author="Fedya" message="eto ya" />
        <Dialog title="Privet" author="Fedya" message="eto ya" />
        <Dialog title="Privet" author="Fedya" message="eto ya" />
      </div>
    );
  }
}
