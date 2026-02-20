import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";


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
        
        const user = await userRepository.createAndSave(name, email); //CRIA E SALVA O OBJETO USER COM OS DADOS RECEBIDOS

        return response.status(201).json(user);
    }
}

export { UsersController };
    