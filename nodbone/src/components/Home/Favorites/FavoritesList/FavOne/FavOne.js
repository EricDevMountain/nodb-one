import React, { Component } from "react";

import "./FavOne.css";

class FavOne extends Component {
  constructor() {
    super();
    this.state = {
      change: ""
    };
  }

  setChange = value => {
    console.log(this.state);
    this.setState({ change: value });
  };

  render() {
    let { i, val, deleteFavorite } = this.props;
    let { change } = this.state;
    return (
      <div className="card">
        <h1 key={i}>{val}</h1>
        <button className="buttn delete" onClick={() => deleteFavorite(i)}>
          Delete
        </button>
        <input
          className="edit"
          onChange={e => this.setChange(e.target.value)}
          value={change}
        />
        <button
          className="buttn submit"
          onClick={() => {
            this.props.changeHandler(change, i);
          }}
        >
          Submit Change
        </button>
      </div>
    );
    //   <Card person={val} key={i} />
  }
}

export default FavOne;
