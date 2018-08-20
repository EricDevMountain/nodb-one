import React, { Component } from "react";
import axios from "axios";
import "./Home.css";

import RandomQuote from "./RandomQuote/RandomQuote";
import FavButton from "./FavButton/FavButton";
import Favorites from "./Favorites/Favorites";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuoteIndex: 0,
      favs: [],
      home: true
    };
  }
  componentDidMount = () => {
    axios
      .get("/api/quotes")
      .then(response => this.setState({ quotes: response.data }));
  };

  addToFavorites = () => {
    let { quotes, currentQuoteIndex } = this.state;

    axios
      .post("/api/favoritequotes", { quote: quotes[currentQuoteIndex] })
      .then(response => this.setState({ favs: response.favoritesList }));
  };
  onFavsClick = () => {
    this.setState({ home: !this.state.home });
  };

  currentIndex = ind => {
    this.setState({ currentQuoteIndex: ind });
  };

  render() {
    if (this.state.home) {
      return (
        <div className="App">
          {!this.state.quotes[0] ? (
            <h1>Loading</h1>
          ) : (
            <div className="homepage">
              <div>
                <button className="favbutton" onClick={this.onFavsClick}>
                  Favorites Page
                </button>
              </div>
              <div>
                <FavButton addToFavorites={this.addToFavorites} />
                <RandomQuote
                  quotes={this.state.quotes}
                  currentIndex={this.currentIndex}
                  addToFavorites={this.addToFavorites}
                />
              </div>
            </div>
          )}
          <img className="ron" src="https://i.imgflip.com/1m8u9d.jpg" alt="" />
        </div>
      );
    } else {
      return (
        <div>
          <Favorites onFavsClick={this.onFavsClick} />
        </div>
      );
    }
  }
}

export default Home;
