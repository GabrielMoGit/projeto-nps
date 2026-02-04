import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'UUID'


@Entity("users") //NOME DA TABELA "users"

class User{ //ATRIBUTOS DA TABELA

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {User};