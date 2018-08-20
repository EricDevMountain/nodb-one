import React, { Component } from "react";
import "./RandomQuote.css";

class RandomQuote extends Component {
  state = {
    randomNumber: 0,
    newIndex: this.props.currentQuoteIndex
  };
  componentDidMount() {
    this.numberGenerator();
  }

  numberGenerator = () => {
    let newNum = Math.floor(Math.random() * this.props.quotes.length);
    this.setState({ randomNumber: newNum }, () => {});
    const { randomNumber } = this.state;
    this.props.currentIndex(newNum);
  };

  render() {
    let { quotes } = this.props;
    let randomQuote = quotes[this.state.randomNumber];

    return (
      <div>
        <button
          className="newquote"
          onClick={() => {
            this.numberGenerator();
          }}
        >
          More Wise Words
        </button>
        <h1 className="randomquote">{randomQuote}</h1>
      </div>
    );
  }
}

export default RandomQuote;
