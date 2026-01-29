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

// http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({message: "Hello world"});
});

// http://localhost:3333/ 
app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso"});   
});

app.listen(3333, ()=> console.log("Servidor rodando!"));