import React, { Component } from "react";
import Image from "./Image.js";
import Caption from "./Caption.js";
import Thumbnails from "./Thumbnails.js";
import { error } from "util";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Meme Generator"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const random = 999;
    fetch(`http://127.0.0.1:1337/${random}`)
    .then((responseData) => {
      // JSON.stringify(responseData);
      // console.log(
      // res.body.JSON.stringify(re)
      // responseData.body.json();
      console.log(responseData.json());
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Image />
        <Caption />
        <Thumbnails />
      <button onClick={this.handleClick}>test me</button>
      </div>
      
    );
  }
}
