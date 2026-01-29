import express from 'express';

const app = express();

/*
METODOS HTTP
GET - Buscar
POST - Salvar
PUT - Alterar
DELETE - Deletar
PATCH - Alteração específica
*/

app.listen(3333, ()=> console.log("Servidor rodando!"));