import React, { Component } from "react";
import Square from "../Square/Square";
import { arrayExpression } from "@babel/types";

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [6, 4, 2]
];

class Game extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isXNext: false,
    isONext: true,
    init: "X",
    symbols: new Array(9),
    won: ""
  };

  onClickHandler = no => {
    let symbols = [...this.state.symbols];
    if (this.state.won) {
      return;
    }

    if (this.state.isXNext) {
      if (symbols[no] == null) {
        symbols[no] = "O";
        this.setState(
          {
            isONext: true,
            isXNext: false,
            symbols: symbols
          },
          () => {
            this.checkWin();
          }
        );
      }
    } else if (this.state.isONext) {
      if (symbols[no] == null) {
        symbols[no] = "X";
        this.setState(
          {
            isONext: false,
            isXNext: true,
            symbols: symbols
          },
          () => {
            this.checkWin();
          }
        );
      }
    }
  };

  checkWin = () => {
    const symb = this.state.symbols;
    winning.forEach(winArr => {
      if (
        symb[winArr[0]] &&
        symb[winArr[0]] == symb[winArr[1]] &&
        symb[winArr[0]] === symb[winArr[2]]
      ) {
        this.setState(
          {
            won: this.state.isONext ? "O" : "X"
          },
          () => {
            if (this.state.won) {
              alert("Won: " + this.state.won);
            }
          }
        );
      }
    });
    if (!symb.includes(undefined) && !this.state.won) {
      this.newGame();
    }
  };

  newGame = () => {
    this.setState({
      isXNext: false,
      isONext: true,
      init: "X",
      symbols: new Array(9),
      won: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row row1">
            <Square
              currentSymbol={this.state.symbols[0]}
              no="0"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[1]}
              no="1"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[2]}
              no="2"
              onClickHandler={this.onClickHandler}
            />
          </div>
          <div className="row row2">
            <Square
              currentSymbol={this.state.symbols[3]}
              no="3"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[4]}
              no="4"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[5]}
              no="5"
              onClickHandler={this.onClickHandler}
            />
          </div>
          <div className="row row3">
            <Square
              currentSymbol={this.state.symbols[6]}
              no="6"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[7]}
              no="7"
              onClickHandler={this.onClickHandler}
            />
            <Square
              currentSymbol={this.state.symbols[8]}
              no="8"
              onClickHandler={this.onClickHandler}
            />
          </div>
          {this.state.won ? (
            <button onClick={this.newGame} type="button" className="new-game">
              New Game
            </button>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
