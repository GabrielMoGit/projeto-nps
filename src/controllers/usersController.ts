import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource"; //INSTANCIA DE CONEXAO COM O BANCO DE DADOS
import { User } from "../models/User"; //ENTIDADE USER QUE REPRESENTA A TABELA USER DO BANCO

class UsersController{ //DEFINIÇÃO DA CLASSE
    async create(request: Request, response: Response){ //MÉTODO QUE SERÁ CHAMADO QUANDO FIZER REQUISIÇÃO DE CRIAR USUARIO
        const {name, email} = request.body; //DADOS ENVIADOS NO CORPO DA REQUISIÇÃO

        const userRepository = AppDataSource.getRepository(User); //REPORITORIO DO TYPEORM PARA EXECUTAR OPERAÇÃO NA TABELA USER

        const userAlreadyExists = await userRepository.findOne({ //SELECT * FROM USERS WHERE EMAIL = "EMAIL"
            where: {email}, 
        });

        if(userAlreadyExists){ //SE O USUARIO JÁ EXISTIR...
            return response.status(400).json({
                error: "Usuário já existe", 
            });
        }
        
        const user = userRepository.create({ //CRIA O OBJETO USER COM OS DADOS RECEBIDOS
            name, email         
        })

        await userRepository.save(user); //SALVA O USUARIO NO BANCO DE DADOS

        return response.json(user);
    }
}

export{UsersController};