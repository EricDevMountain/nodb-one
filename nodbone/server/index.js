const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");

const {
  getQuotes,
  addQuoteToFavorites,
  getFavorites,
  deleteFavorite,
  changeFavorite
} = require("./controllers/mainCtrl");

const port = 3001;

const app = express();
app.use(json());
app.use(cors());

//ENDPOINTS
app.get("/api/quotes", getQuotes);
app.post("/api/favoritequotes", addQuoteToFavorites);

app.get("/api/favoritequotes", getFavorites);
app.delete("/api/favoritequote/:id", deleteFavorite);
app.put("/api/favoritequote/:id", changeFavorite);

app.listen(port, () => {
  console.log(`Whistle Tip on port:${port}`);
});
