import { Column, CreateDateColumn, Entity, ForeignKey, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("SurveysUsers")

class SurveysUsers{
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn() //CRIA AUTOMATICAMENTE A DATA, NO MOMENTO DA CRIAÇÃO DO REGISTRO
    created_at: Date;

    constructor(){
        if(!this.id){ //VERIFICA SE O USUARIO NÃO POSSÚI UM ID
            this.id = v4() //CASO NÃO POSSUA ELE GERA UM ID PARA O USUÁRIO
        }
    }

}

export {SurveysUsers};
