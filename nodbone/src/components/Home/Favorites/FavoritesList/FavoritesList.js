import React, { Component } from "react";
import "./FavoritesList.css";
import FavOne from "./FavOne/FavOne";

class FavoritesList extends Component {
  changeHandler = (change, i) => {
    this.props.changeFavorite(change, i);
  };

  render() {
    return this.props.favorites.map((val, i) => (
      <div className="eh">
        <FavOne
          deleteFavorite={this.props.deleteFavorite}
          changeHandler={this.changeHandler}
          setChange={this.setChange}
          key={i}
          val={val}
          i={i}
        />
      </div>
    ));
  }
}

export default FavoritesList;
