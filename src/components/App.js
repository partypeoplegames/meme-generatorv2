import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Image image={meme-image}/>
        <Caption caption={meme-caption}/>
        <Thumbnails thumbnail={meme-thumbnails}/>
      </div>
    );
  }
}

ReactDOM.render(
  document.getElementById('app')
);