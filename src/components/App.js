import React, { Component } from "react";
import Image from "./Image.js";
import Caption from "./Caption.js";
import Thumbnails from "./Thumbnails.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Meme Generator"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Image />
        <Caption />
        <Thumbnails />
      </div>
    );
  }
}
