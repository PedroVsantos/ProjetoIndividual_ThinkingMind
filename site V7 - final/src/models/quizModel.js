var database = require("../database/config");

function cadastrar(pontos, idUser) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontos, idUser);

    var instrucaoSqlQuiz = `
        INSERT INTO quiz (id, usuario_id, pontuacao, data_hora) 
        VALUES (default, '${idUser}', '${pontos}', NOW());
    `;
    
    console.log("Executando a instrução SQL do quiz: \n" + instrucaoSqlQuiz);
    
    return database.executar(instrucaoSqlQuiz)
        .then(function () {
            if (pontos >= 50) {
                var instrucaoSqlConquista = `
                    INSERT INTO conquistas (idConquista, usuario_id, nome, data_conquista) 
                    VALUES (default, '${idUser}', 'Pontos acumulados: ${pontos}', NOW());
                `;
                
                console.log("Executando a instrução SQL de conquistas: \n" + instrucaoSqlConquista);
                return database.executar(instrucaoSqlConquista);
            }
        });
}

module.exports = {
    cadastrar
};
