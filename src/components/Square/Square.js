import React, { Component } from "react";

class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        onClick={() => this.props.onClickHandler(this.props.no)}
        className="square"
      >
        {this.props.currentSymbol}
      </div>
    );
  }
}

export default Square;
