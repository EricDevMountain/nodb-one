import React, { Component } from "react";

import "./FavButton.css";

const FavButton = props => {
  return (
    <div>
      <button className="favebutton" onClick={() => props.addToFavorites()}>
        I Gotta Remember This One!
      </button>
    </div>
  );
};

export default FavButton;
