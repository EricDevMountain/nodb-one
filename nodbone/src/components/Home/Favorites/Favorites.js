import React, { Component } from "react";
import axios from "axios";

import "./Favorites.css";

import FavoritesList from "./FavoritesList/FavoritesList";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      currentIndex: 0,
      newQuote: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/favoritequotes")
      .then(response => this.setState({ favorites: response.data }));
  }
  deleteFavorite = i => {
    axios
      .delete(`/api/favoritequote/${i}`)
      .then(response => this.setState({ favorites: response.data }));
  };
  changeFavorite = (val, ind) => {
    axios
      .put(`/api/favoritequote/${ind}`, { val })
      .then(response => this.setState({ favorites: response.data }));
  };
  newFavorite = quote => {
    axios
      .post("/api/favoritequotes", { quote })
      .then(response =>
        this.setState({ favorites: response.data, newQuote: "" })
      );
  };

  onAddFavoriteHandler = () => {
    this.newFavorite(this.state.newQuote);
  };

  render() {
    let { newQuote, favorites } = this.state;
    let { onFavsClick } = this.props;

    return (
      <div className="favoritespage">
        <button className="homeButton" onClick={onFavsClick}>
          Home Page
        </button>
        <FavoritesList
          favorites={favorites}
          deleteFavorite={this.deleteFavorite}
          changeFavorite={this.changeFavorite}
        />
        <div className="newq">
          <input
            className="newinput"
            onChange={e => this.setState({ newQuote: e.target.value })}
            placeholder="New Quote Here"
            value={this.state.newQuote}
          />
          <button className="submitButton" onClick={this.onAddFavoriteHandler}>
            Submit New Quote
          </button>
        </div>
      </div>
    );
  }
}
export default Favorites;
