create table usuario (
    id int primary key auto_increment,
    nome varchar(45),
    email varchar(255),
    senha varchar(255)
);

create table quiz (
    id int auto_increment primary key,
    usuario_id int,
    pontuacao int,
    data_hora datetime,
    foreign key (usuario_id) references usuario(id)
);

create table pontuacoes_quiz (
    id int auto_increment primary key,
    usuario_id int,
    pontuacao_atual int,
    tentativa_numero int,
    data_hora datetime,
    foreign key (usuario_id) references usuario(id)
);

create table form (
    id int auto_increment primary key,
    usuario_id int,
    resposta varchar(500),
    foreign key (usuario_id) references usuario(id)
);

create table conquistas (
    id int auto_increment primary key,
    usuario_id int,
    nome varchar(100),
    descricao varchar(500),
    data_conquista datetime,
    foreign key (usuario_id) references usuario(id)
);