import React, { Component } from "react";

export class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1>{this.props.title}</h1>
        <div className="last-message">
          <h2>{this.props.author}</h2>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}
