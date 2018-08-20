const axios = require("axios");

let data = [];

let favoritesList = [];

axios
  .get("http://ron-swanson-quotes.herokuapp.com/v2/quotes/58")
  .then(response => (data = response.data))
  .catch(err => console.log(err));

//=============HOME
const getQuotes = (req, res, next) => {
  res.status(200).json(data);
};

const addQuoteToFavorites = (req, res, next) => {
  favoritesList.push(req.body.quote);
  res.status(200).json(favoritesList);
};

//============FAVORITES

const getFavorites = (req, res, next) => {
  res.status(200).json(favoritesList);
};

const deleteFavorite = (req, res, next) => {
  const ind = parseInt(req.params.id);
  favoritesList.splice(ind, 1);
  res.status(200).json(favoritesList);
};

const changeFavorite = (req, res, next) => {
  const ind = parseInt(req.params.id);
  favoritesList[ind] = req.body.val;
  res.status(200).json(favoritesList);
};

// const deleteQuote = (req, res, next) =>{
//     res.status(200).json(data)
// }

// const changeQuote = (req, res, next) =>{
//     res.status(200).json(data)
// }

module.exports = {
  getQuotes,
  addQuoteToFavorites,
  getFavorites,
  deleteFavorite,
  changeFavorite
};
