var database = require("../database/config");

// Função para obter o ranking dos jogadores
function obterRanking() {
    console.log("ACESSEI O RANKING MODEL");

    var instrucaoSql = `
        SELECT usuario.nome, COUNT(conquistas.idConquista) AS pontos
        FROM usuario
        LEFT JOIN conquistas ON usuario.id = conquistas.usuario_id
        GROUP BY usuario.id
        ORDER BY pontos DESC;

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then((resultado) => {
            console.log("Resultado da query:", resultado);
            return resultado;
        })
        .catch((erro) => {
            console.error("Erro ao executar a instrução SQL:", erro);
            throw erro;
        });
}

module.exports = {
    obterRanking
};
