var database = require("../database/config");

// Função para salvar o feedback no banco de dados
function salvarFeedback(resposta, usuario_id) {
    console.log("ACESSEI O FEEDBACK MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarFeedback():", resposta, usuario_id);

    // Inserindo a query SQL para salvar o feedback
    var instrucaoSql = 
    `INSERT INTO form (idForm, usuario_id, resposta) VALUES (default, '${usuario_id}', '${resposta}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarFeedback
};
