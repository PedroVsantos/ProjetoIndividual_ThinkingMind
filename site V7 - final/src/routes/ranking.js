var express = require("express");
var router = express.Router();
var rankingController = require("../controllers/rankingController");

// Rota para obter o ranking
router.get("/obter", rankingController.obterRanking);

module.exports = router;
