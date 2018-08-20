import React, { Component } from "react";
import "./FavoritesList.css";

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: ""
    };
  }

  changeHandler = (change, i) => {
    console.log(change, i);
    this.props.changeFavorite(change, i);
  };
  render() {
    let { change } = this.state;
    return this.props.favorites.map((val, i) => (
      <div className="card">
        <h1 key={i}>{val}</h1>
        <button
          className="buttn delete"
          onClick={() => this.props.deleteFavorite(i)}
        >
          Delete
        </button>
        <input
          className="edit"
          onChange={e => this.setState({ change: e.target.value })}
          value={change}
        />
        <button
          className="buttn submit"
          onClick={() => {
            this.changeHandler(change, i);
            this.setState({ change: "" });
          }}
        >
          Submit Change
        </button>
      </div>
    ));
  }
}

export default FavoritesList;
