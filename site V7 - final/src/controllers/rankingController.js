var rankingModel = require("../models/rankingModel");

// Endpoint para obter o ranking
function obterRanking(req, res) {
    console.log("ACESSEI O RANKING CONTROLLER");

    rankingModel.obterRanking()
        .then(function (resultado) {
            console.log("Resultado do ranking obtido:", resultado);
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error("Erro ao obter o ranking: ", erro);
            res.status(500).json({ erro: "Erro ao obter o ranking" });
        });
}

module.exports = {
    obterRanking
};
