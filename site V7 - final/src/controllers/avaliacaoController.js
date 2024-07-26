var feedbackModel = require("../models/avaliacaoModel"); // Importa o modelo de feedback

function enviarFeedback(req, res) {
    // Recuperando os valores do corpo da requisição
    var resposta = req.body.resposta;
    var usuario_id = req.body.usuario_id;

    // Passando os valores como parâmetro para o arquivo feedbackModel.js
    feedbackModel.salvarFeedback(resposta, usuario_id)
        .then(function (resultado) {
            // Enviando uma resposta JSON indicando sucesso
            res.json({ success: true });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nErro ao armazenar o feedback! Erro: ",
                erro.sqlMessage
            );
            // Enviando uma resposta JSON com status de erro
            res.status(500).json({ success: false, error: erro.sqlMessage });
        });
}

module.exports = {
    enviarFeedback
};
