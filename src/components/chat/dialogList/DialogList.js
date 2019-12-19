import React, { Component } from "react";
import { Dialog } from "./dialog/Dialog";
import "./DialogList.css";

export class DialogList extends Component {
  render() {
    return (
      <div className="dialog-list-container">
        <Dialog title="Privet" author="Fedya" message="eto ya" />
      </div>
    );
  }
}
