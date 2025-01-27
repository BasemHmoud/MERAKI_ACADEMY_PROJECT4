const {saveCard, getCardByUserId} = require("../controllers/cards");
const express = require("express");

const cardRouter = express.Router();

cardRouter.post("/", saveCard);
cardRouter.get("/",getCardByUserId);

module.exports = cardRouter;