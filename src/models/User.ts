import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'UUID'


@Entity("users") //NOME DA TABELA "users"

class User{ //ATRIBUTOS DA TABELA

    @PrimaryColumn()
    readonly id: string; //READONLY FAZ COM QUE NÃO POSS SER ALTERADO
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn() //CRIA AUTOMATICAMENTE A DATA, NO MOMENTO DA CRIAÇÃO DO REGISTRO
    created_at: Date;

    constructor(){
        if(!this.id){ //VERIFICA SE O USUARIO NÃO POSSÚI UM ID
            this.id = uuid() //CASO NÃO POSSUA ELE GERA UM ID PARA O USUÁRIO
        }
    }
}

export {User};