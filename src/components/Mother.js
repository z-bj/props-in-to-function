import React, { Component } from "react";

class Mother extends Component {
  state = {
    messageMother: null,
    messageToto: null,
  };

  mothersOrder = () => {
    this.setState({
      messageMother: "go tidy your room",
    });
  };

  render() {
    return (
      <div>
        <h1>Mother</h1>
        <button onClick={this.mothersOrder}>mother's order</button>
        <p>{this.state.messageMother}</p>
        <hr />
      </div>
    );
  }
}

export default Mother;
