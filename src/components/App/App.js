import React, { Component, Fragment } from "react";
import Message from "../Message/Message";
class App extends Component {
  render() {
    return (
      <Fragment>
        <br />
        <Message message="Home" />
      </Fragment>
    );
  }
}

export default App;
