var express = require("express");
var router = express.Router();
var feedbackController = require("../controllers/avaliacaoController");

// Rota para enviar feedback
router.post("/enviarFeedback", function (req, res) {
    feedbackController.enviarFeedback(req, res);
});

// Rota para obter dados do gráfico
router.get("/dadosGrafico", function (req, res) {
    feedbackController.obterDadosGrafico(req, res);
});

module.exports = router;
