var express = require("express");
var router = express.Router();
var feedbackController = require("../controllers/avaliacaoController");

// Rota para enviar feedback
router.post("/enviarFeedback", function (req, res) {
    feedbackController.enviarFeedback(req, res);
});

module.exports = router;
