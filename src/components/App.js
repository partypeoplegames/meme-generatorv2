import React, { Component } from "react";
import Image from "./Image.js";
import Caption from "./Caption.js";
import Thumbnails from "./Thumbnails.js";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "loading",
      message: "Meme Generator"
    };

    this.handleRandomMeme = this.handleRandomMeme.bind(this);
  }
  componentDidMount() {
    this.handleRandomMeme();
  }

  handleRandomMeme() {
    axios
      .get("http://localhost:1337/generateMeme")
      .then(response => console.log(response.data))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Image />
        <Caption />
        <button onClick={this.handleRandomMeme}>click for random!</button>
        <Thumbnails />
      <button onClick={this.handleClick}>test me</button>
      </div>
      
    );
  }
}
