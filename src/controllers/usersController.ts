import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource"; //INSTANCIA DE CONEXAO COM O BANCO DE DADOS
import { User } from "../models/User"; //ENTIDADE USER QUE REPRESENTA A TABELA USER DO BANCO
import { UsersRepository } from "../repositories/UsersRepository";

interface UserInformation{
    name: string;
    email: string;
}

class UsersController{ //DEFINIÇÃO DA CLASSE
    async create(request: Request, response: Response){ //MÉTODO QUE SERÁ CHAMADO QUANDO FIZER REQUISIÇÃO DE CRIAR USUARIO
        const {name, email} = request.body; //DADOS ENVIADOS NO CORPO DA REQUISIÇÃO

        const userRepository = new UsersRepository(); //REPORITORIO DO TYPEORM PARA EXECUTAR OPERAÇÃO NA TABELA USER

        const userAlreadyExists = await userRepository.findByEmail(email); //SELECT * FROM USERS WHERE EMAIL = "EMAIL"


        if(userAlreadyExists){ //SE O USUARIO JÁ EXISTIR...
            return response.status(400).json({
                error: "Usuário já existe", 
            });
        }
        
        const user = userRepository.createAndSave(name, email); //CRIA E SALVA O OBJETO USER COM OS DADOS RECEBIDOS

        return response.json(user);
    }
}

export{UsersController};